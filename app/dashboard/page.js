'use client';

export default function Page() {
  return (
    <>
      {/*<pre>{JSON.stringify(session, null, 2)}</pre>;*/}
      <button
        onClick={() => {
          fetch('/api/todo', { method: 'PUT' });
        }}
      >
        Add Todo
      </button>
    </>
  );
}
