import { useRef } from "react";

type Trip = {
  id: number,
  origin: string,
  destination: string
}

function App() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const trips: Trip[] = [
    { id: 1, origin: 'Hurstville', destination: 'Central' }
  ];
  
  return (
    <>
      <h1>Transport Planner</h1>
      <button onClick={() => dialogRef.current?.showModal()}>
        Add trip
      </button>

      <h2>Trips</h2>
      <ul>
        {trips.map(t => <li>{t.origin} to {t.destination}</li>)}
      </ul>

      <dialog ref={dialogRef}>
        <p>Create a new trip</p>

        <button onClick={() => dialogRef.current?.close()}>
          Close
        </button>
      </dialog>
    </>
  )
}

export default App
