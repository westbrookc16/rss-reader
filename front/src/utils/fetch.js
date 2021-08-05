async function callApi(url, method, data) {
  const res = await fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: { "Content-Type": "Application/JSON" },
  });
  return await res.json();
}
export { callApi };
