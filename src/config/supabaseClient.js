import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qhtxrkapznipvdydeacv.supabase.co/";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFodHhya2Fwem5pcHZkeWRlYWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY1NzA4NzAsImV4cCI6MjAzMjE0Njg3MH0.ApM_pqA0pMU8WxB2QdME6SJca5fdrkbt4QsItFxxG8s";
// console.log(supabaseKey);
// console.log(supabaseUrl);
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
// import { createClient, SupabaseClient } from "@supabase/supabase-js";

// // Define the type of the environment variables
// type EnvironmentVariables = {
//   REACT_APP_SUPABASE_URL: string;
//   REACT_APP_ANON_KEY: string;
// };

// // Access the environment variables
// const { REACT_APP_SUPABASE_URL, REACT_APP_ANON_KEY } =
//   process.env as EnvironmentVariables;

// // Create the Supabase client
// const supabase: SupabaseClient = createClient(
//   REACT_APP_SUPABASE_URL,
//   REACT_APP_ANON_KEY
// );

// export default supabase;
