import { useState, useEffect } from 'react';

const parseExperience = () => {
  return [
    {
      image: '../assets/builders_capital.png',
      company: 'Builders Capital',
      position: 'Software Engineer',
      duration: '03/2022 - 08/2025',
      // badges: ['React', 'TypeScript', 'Ant Design', 'Mobx', 'React Native'],
      badges: [],
      listItems: [],
      desc: 'Construction financing for builders nationwide',
    },
    {
      image: '../assets/startly.png',
      company: 'Startly Labs, LLC',
      position: 'Full-stack Engineer',
      duration: '09/2019 - 02/2022',
      // badges: ['React', 'TypeScript', 'Ant Design', 'Mobx', 'React Native'],
      badges: [],
      listItems: [],
      desc: 'All-in-one IT service management platform',
    },
    {
      image: '../assets/lcg.png',
      company: 'LCG, Inc',
      position: 'Full-Stack Engineer',
      duration: '01/2018 - 08/2019',
      // badges: ['Java', 'Spring', 'React', 'Microservice', 'Chakra UI'],
      badges: [],
      listItems: [],
      desc: 'Government IT services, impact through innovation',
    },
    {
      image: '../assets/soltech.webp',
      company: 'Soltech, Inc',
      position: 'Software Engineer',
      duration: '10/2013 - 12/2017',
      // badges: [
      //   'React',
      //   'Angular',
      //   'Vue.js',
      //   'Node.js',
      //   'Nest.js',
      //   'PHP',
      //   'AWS',
      // ],
      badges: [],
      listItems: [],
    },
  ];
};

const ExperienceArray = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch('/content/Experience.md')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch markdown content');
        }
        return response.text();
      })
      .then((mdContent) => {
        setExperience(parseExperience(mdContent));
      })
      .catch((error) => {
        console.error('Error fetching markdown content:', error);
      });
  }, []);

  return experience;
};

export default ExperienceArray;
