import React from 'react'
import { Artist } from '@/app/callback/page'
import Image from 'next/image';

type ArtistCardProps = {
  artist: Artist
}

const ArtistCard = ({artist}: ArtistCardProps) => {
  const image = artist.images[0].url;
  return (
    <div className='h-full flex flex-col gap-5'>
      <Image src={image} alt={`Image of ${artist.name}`} height={300} width={300} className='rounded-md'/> 
      <div className='flex flex-col gap-2 items-center'>
        <h1 className='font-semibold text-xl dark:text-red-500'>{artist.name}</h1>
        <div className='flex flex-row gap-2 items-center justify-center'>
          {
            artist.genres.slice(0, 3).map(genre => (<span className='font-lg dark:text-gray-300 text-red-500' key={genre}>{genre}</span>))
          }
        </div>
      </div>
    </div>
  )
}

export default ArtistCard
