import React, {useEffect, useState} from "react";
import {useRouter} from 'next/router';

export default function FundDetail() {
  const themes = {dark: '#000000'}
  const router = useRouter();
  console.log(router)
  const [tab, setTab] = useState('Description');
  const tabList = ['Description', 'Risk & Return', 'Factsheet', 'Prospectus'];
  const {query: {title}} = router;
  const [windowDimensions, setWindowDimensions] = useState({});

  useEffect(() => {
    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return { width, height };
    }

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div>
      <h1>{router.query.title}</h1>
    </div>
  )
}
