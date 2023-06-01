export function createPersona(Persona) {
  console.log(Persona)
  fetch('http://localhost:3000/api/v1/personas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Persona)
  })
}

export async function getPersonas() {
  const response = await fetch('http://localhost:3000/api/v1/personas')
  const data = await response.json()
  return data;
}

export function deletePersona(id) {
  fetch(`http://localhost:3000/api/v1/personas/${id}`,{method:"DELETE"})
}
