import { useState, useEffect } from 'react';

const parseProfile = (mdContent) => {
  const profile = {
    siteName: '',
    headerName: '',
    headerRole: '',
    headerDesc: '',
    about: '',
    contact: '',
    linkedin: '',
    github: '',
    email: '',
    logo: '',
  };

  const lines = mdContent.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      const section = line.substr(3).trim();
      const contactLinks = ['LinkedIn', 'GitHub', 'Email'];

      switch (section) {
        case 'Header':
          profile.headerName = lines[++i].substr(2).trim();
          profile.headerRole = lines[++i].substr(2).trim();
          profile.headerDesc = lines[++i].substr(2).trim();
          break;
        case 'About': {
          // Multi-line markdown, up to the next section
          const aboutLines = [];
          while (i + 1 < lines.length && !lines[i + 1].startsWith('## ')) {
            aboutLines.push(lines[++i]);
          }
          profile.about = aboutLines.join('\n').trim();
          break;
        }
        case 'Contact':
          profile.contact = lines[++i].trim();

          // Links are optional and may appear in any order
          while (i + 1 < lines.length && lines[i + 1].startsWith('- ')) {
            const [key, ...value] = lines[++i].substr(2).split(': ');
            if (contactLinks.includes(key.trim())) {
              profile[key.trim().toLowerCase()] = value.join(': ').trim();
            }
          }
          break;
        case 'Logo':
          profile.logo = lines[++i].substr(2).trim();
          break;
        default:
          // do nothing
          break;
      }
    }
  }

  return profile;
};

const ProfileArray = () => {
  const [profile, setProfile] = useState({
    siteName: '',
    headerName: '',
    headerRole: '',
    headerDesc: '',
    about: '',
    contact: '',
    linkedin: '',
    github: '',
    email: '',
    logo: '',
  });

  useEffect(() => {
    fetch('/content/Profile.md')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch markdown content');
        }
        return response.text();
      })
      .then((mdContent) => {
        setProfile(parseProfile(mdContent));
      })
      .catch((error) => {
        console.error('Error fetching markdown content:', error);
      });
  }, []);

  return profile;
};

export default ProfileArray;
