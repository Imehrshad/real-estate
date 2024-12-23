async function fetchData() {
  // Simulate a delay for loading
  await new Promise((resolve) => setTimeout(resolve, 1200000000));
  return { message: "Hello, World!" };
}

const page = async () => {
  const data = await fetchData();

  return <div>check your email page</div>;
};

export default page;
