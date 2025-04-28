import Image from 'next/image';
import { useEffect, useState } from 'react';

interface MapSectionProps {
  id: string;
}

function MapSection({ id }: MapSectionProps) {
  const [station, setStation] = useState('');

  useEffect(() => {
    const route = JSON.parse(localStorage.getItem('route') || '{}');
    setStation(route.station);
  }, []);

  return (
    <div id={id} className="w-full">
      { (station === 'Springfield' || station === 'Westborough') && <Image src="/map.webp" width={500} height={500} alt="map" className="calc-image w-full" /> }
      { (station === 'Elkridge' || station === 'Baltimore') && <Image src="/map2.webp" width={500} height={500} alt="map" className="calc-image w-full" /> }
      { station === 'Orlando' && <Image src="/map3.webp" width={500} height={500} alt="map" className="calc-image w-full" /> }
    </div>
  );
}

export default MapSection;