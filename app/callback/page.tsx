'use client';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import ArtistCard from '@/components/ArtistCard';
import { ReactTyped } from 'react-typed';

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


const getPopularity = async(artist: Artist[]) => {
    let totalPopularity = 0;
    artist.map((artist) => totalPopularity += artist.popularity)

    if(totalPopularity >= 300) {
      return true
    }
    else {
      return false
    }
}


const CallBack = () => {
  const searchParams = useSearchParams();
  const [items, setItems] = useState<Artist[]>([]);
  const [basic, setBasic] = useState(false)
  const token = searchParams.get('token');
  const token_type = searchParams.get('type');

  useEffect(() => {
    if(!token || !token_type) return;
    const getItems = async() => {
      const fetchedItems = await getUserData(token, token_type);
      setItems(fetchedItems);
      
    }

      getItems();

      const getBasic = async() => {
        const isBasic = await getPopularity(items);
        setBasic(isBasic);
      }
      getBasic();
  }, [token, token_type]);

  if(items.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center w-full h-screen'>
          <h1 className='font-bold text-lg'>Loading <ReactTyped strings={['...']} loop={true} backSpeed={100} typeSpeed={150}/></h1>
      </div>
    )
  }

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

      <h1 className='text-2xl font-bold text-green-500'>YOU ARE {basic? 'BASIC' : 'NOT BASIC'}</h1>
    </div>
  )
}

export default CallBack
