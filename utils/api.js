export async function getTestimonialsData() {
  const res = await fetch(
    "https://dev-arkitektur-headless.pantheonsite.io/wp-json/wp/v2/pages"
  );
  const data = await res.json();
  return data;
}
