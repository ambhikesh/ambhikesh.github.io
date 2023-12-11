import axios from 'axios';
import Head from 'next/head';

/*const Projects = ({ repositories }) => {
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
*/

const Projects = () =>{
  return(
    <>
          <Head>
        <title>Ambhikesh | Projects</title>
      </Head>
      <div className='m-5'>
        <span className='text-3xl text-white'>Projects</span>
        <ul>
            <div className='m-5 rounded-xl hover:shadow-2xl hover:scale-105 transition p-2'>
              <a href={"https://github.com/True-Fox/File-Search-and-Execution-Tool"}>
                <li>
                  <div className='ml-2 text-lg no-underline text-white'>File-Search-and-Execution-Tool</div>
                  <div className="ml-2 text-slate-400">The tool simplify the process of searching directories for specific files or file types on Unix/Linux systems.</div>
                </li>
              </a>
            </div>
            <div className='m-5 rounded-xl hover:shadow-2xl hover:scale-105 transition p-2'>
              <a href={"https://github.com/True-Fox/Book-sharing-system "}>
                <li>
                  <div className='ml-2 text-lg no-underline text-white'>Book-sharing-system </div>
                  <div className="ml-2 text-slate-400">A Web application built using django framework that let users exchange without centralized institutions like libraries.</div>
                </li>
              </a>
            </div>
            <div className='m-5 rounded-xl hover:shadow-2xl hover:scale-105 transition p-2'>
              <a href={"https://github.com/True-Fox/WikiPy-Search"}>
                <li>
                  <div className='ml-2 text-lg no-underline text-white'>WikiPy-Search </div>
                  <div className="ml-2 text-slate-400">A Command line tool that lets you read the summary of the query you provide from wikipedia</div>
                </li>
              </a>
            </div>
            <div className='m-5 rounded-xl hover:shadow-2xl hover:scale-105 transition p-2'>
              <a href={"https://github.com/True-Fox/Spotify-to-Mp3"}>
                <li>
                  <div className='ml-2 text-lg no-underline text-white'>Spotify-to-Mp3</div>
                  <div className="ml-2 text-slate-400">A python script that downloads songs from the given URI of a Spotify playlist</div>
                </li>
              </a>
            </div>
            <div className='m-5 rounded-xl hover:shadow-2xl hover:scale-105 transition p-2'>
              <a href={"https://github.com/True-Fox/JustEvs "}>
                <li>
                  <div className='ml-2 text-lg no-underline text-white'>JustEvs </div>
                  <div className="ml-2 text-slate-400">A Web application built using MERN stack which promotes the usage of electric vehicles.</div>
                </li>
              </a>
            </div>
            <div className='m-5 rounded-xl hover:shadow-2xl hover:scale-105 transition p-2'>
              <a href={"https://github.com/True-Fox/Virtual-Casino"}>
                <li>
                  <div className='ml-2 text-lg no-underline text-white'>Virtual-Casino</div>
                  <div className="ml-2 text-slate-400">An attempt at making casino games using C programming</div>
                </li>
              </a>
            </div>
        </ul>
      </div>
    </>
  )
}

export default Projects;
