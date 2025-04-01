import { useState, useEffect } from 'react';

const parseExperience = () => {
  return [
    {
      image: '../assets/startly.png',
      company: 'Startly Labs, LLC',
      position: 'Lead Engineer',
      duration: '01/2022 - 02/2025',
      // badges: ['React', 'TypeScript', 'Ant Design', 'Mobx', 'React Native'],
      badges: [],
      listItems: [],
    },
    {
      image: '../assets/collective.webp',
      company: 'Collective Hub, Inc',
      position: 'Senior Full-Stack Engineer',
      duration: '06/2019 - 12/2021',
      // badges: ['Java', 'Spring', 'React', 'Microservice', 'Chakra UI'],
      badges: [],
      listItems: [],
    },
    {
      image: '../assets/sweet.ico',
      company: 'Social Sweet',
      position: 'Senior Front-End Engineer',
      duration: '01/2018 - 05/2019',
      // badges: ['Next.js', 'TypeScript', 'Material UI'],
      badges: [],
      listItems: [],
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
