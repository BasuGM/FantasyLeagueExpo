// export const fetchUpcomingMatches = () => {
//     const access_token =
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsIm1vYmlsZV9udW1iZXIiOiI5MDAwMzI0MjM0IiwiaXNUZW1wVXNlciI6ZmFsc2UsInRlYW1fbmFtZSI6IkZqZ2tpIiwiaWF0IjoxNjIzNTAwNzAyLCJleHAiOjEwMjYzNTAwNzAyLCJhdWQiOiIxMiIsImlzcyI6IkxlYWd1ZSBYIn0.40ZTfIvkGhfrL5t5x3ACaAjVAVAW9TViVj-SCeDIiSc';

//   axios
//     .get('http://15.206.110.130:5001/matches/upcoming-matches', {
//       headers: {
//         'x-access-token': `${access_token}`,
//       },
//     })
//     .then((res) => {
//       console.log(res.data.matches.cricket);
//       return res.data.matches.cricket
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }
