export function submitNetlifyForm(formName, fields) {
  const body = new URLSearchParams({ 'form-name': formName, ...fields }).toString()
  return fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
}
