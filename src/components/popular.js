// import React from "react";

// const PopularPage = ({ popularPosts }) => {
//   return (
//     <div>
//       <h1>Popular Posts</h1>
//       <ul>
//         {popularPosts.map((post) => (
//           <li key={post.id}>
//             <strong>{post.title}</strong> by {post.user.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export async function getStaticProps() {
//   try {
//     const res = await fetch("http://localhost:3000/api/popular");
//     const popularPosts = await res.json();

//     return {
//       props: {
//         popularPosts,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching popular posts:", error);
//     return {
//       props: {
//         popularPosts: [],
//       },
//     };
//   }
// }

// export default PopularPage;
