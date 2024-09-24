'use client';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import ArtistCard from '@/components/ArtistCard';
import { serialKillers, genreTraits } from '@/constants';
import Image from 'next/image';

export type Artist = {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: Array<{
    height: number;
    url: string;
    width: number;
  }>;
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

type Genre = keyof typeof genreTraits;

export type Killer = {
  name: string,
  image: string,
  traits: string[]
}

const getUserData = async(token: string, token_type: string) => {

  const response = await fetch('https://api.spotify.com/v1/me/top/artists?limit=6', 
    {
      method: 'GET',
      headers: {
        'Authorization': `${token_type} ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  );

  const data = await response.json();
  const items = data.items;
  return items;

}

function getArtistTraits(artist: Artist) {
  const genre = artist.genres[0]?.toLowerCase();
  if (genre && genre in genreTraits) {
    return genreTraits[genre as keyof typeof genreTraits]
  }
  return [];
}

const getSerialKillerMatch = (userTraits: { [key: string]: number }) => {
  let bestMatch: Killer | null = null;
  let highestScore = 0;

  serialKillers.forEach(killer => {
    const score = killer.traits.reduce((total, trait) => {
      return total + (userTraits[trait] || 0);
    }, 0);

    if (score > highestScore) {
      highestScore = score;
      bestMatch = killer;
    }
  });
  return bestMatch;
};


const CallBack = () => {
  const searchParams = useSearchParams();
  const [items, setItems] = useState<Artist[]>([]);
  const [bestMatch, setBestMatch] = useState<Killer>();
  const [image, setImage] = useState('');
  const token = searchParams.get('token');
  const token_type = searchParams.get('type');

  if(!token || !token_type) {
    return (
      <h1>Missing token or token type in url</h1>
    )
  }

  useEffect(() => {
    const getItems = async() => {
      const fetchedItems = await getUserData(token, token_type);
      setItems(fetchedItems);
      
      const userTraits : {[key: string]: number} = {};

      fetchedItems.forEach((artist: Artist) => {
        const traits = getArtistTraits(artist);
        traits.forEach(trait => {
          userTraits[trait] = (userTraits[trait] || 0) + 1;
        })
      });

      const match = getSerialKillerMatch(userTraits);
      if(match) {
        setBestMatch(match);

      }
    }

      getItems();
  }, [token, token_type]);

  if(items.length === 0) {
    <h1>Loading items</h1>
  }
  console.log('Best match: ' + bestMatch);

  return (
    <div className='min-h-screen md:w-2/3 w-full mx-auto flex flex-col items-center gap-10 py-10 px-10'>
      <h1 className='font-bold text-4xl'>Your top artists</h1>
      <div className='sm:grid grid-cols-3 flex flex-col gap-10'>
        {
          items.map((item, index) => (
            <ArtistCard key={index} artist={item}/>
          ))
        }
      </div>

      {bestMatch && 
      
        <div className='flex flex-col items-center justify-center gap-2'>
          <h2 className='text-4xl mt-10'>You are <strong className='text-red-500 font-bold'>{bestMatch.name}</strong></h2>
          <Image src={bestMatch.image} alt='Picture' width={300} height={300}/>
        </div>
        }
    </div>
  )
}

export default CallBack
