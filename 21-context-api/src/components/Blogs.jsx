// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// import Spinner from './Spinner';

// function Blogs() {
//   const { loading, posts } = useContext(AppContext);

//   return (
//     <div>
//       {loading ? (
//         <Spinner />
//       ) : (posts.length === 0 ? (
//         <div>
//           <p>No Posts Found</p>
//         </div>
//       ) : (
//         posts.map((post) => (
//           <div key={post.id}>
//             <p>{post.title}</p>
//             <p>
//               by <span>{post.author}</span> on <span>{post.category}</span>
//             </p>
//             <p>Posted on {post.date}</p>
//             <p>{post.content}</p>
//             <div>
//               {post.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   style={{ marginRight: '5px' }}
//                 >{`#${tag}`}</span>
//               ))}
//             </div>
//           </div>
//         ))
//       ))}
//     </div>
//   );
// }

// export default Blogs;
