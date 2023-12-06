import axios from 'axios';
import Head from 'next/head';

const Projects = ({ repositories }) => {
  return (
    <>
      <Head>
        <title>Ambhikesh | Projects</title>
      </Head>
      <div className='m-5'>
        <span className='text-3xl'>Projects</span>
        <ul>
          {repositories.map((repo) => (
            <div key={repo.id} className='m-5 rounded-xl hover:shadow-2xl hover:scale-105 transition p-2'>
              <a href={"https://github.com/True-Fox/" + repo.name}>
                <li>
                  <div className='ml-2 text-lg no-underline'>{repo.name}</div>
                  <div className="ml-2 text-slate-600">{repo.description}</div>
                </li>
              </a>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const accessToken = process.env.ACCESS_TOKEN;
  const username = 'True-Fox';

  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });

    const repositories = response.data;
    if (repositories) {
      console.log("Got repos!");
    } else {
      console.log("Getting Repos failed!");
    }

    return {
      props: {
        repositories,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        repositories: [],
      },
    };
  }
}

export default Projects;
