export const HttpMethod = {
  GET: "get",
  POST: "post"
  // etc
}

export const API_URL = {
  list_movies: "https://api.themoviedb.org/3/movie/popular",
  img_directory: (dir:string) => `https://www.themoviedb.org/t/p/w440_and_h660_face${dir}` 
}