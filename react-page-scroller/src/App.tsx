import { useState } from 'react';
import ReactPageScroller from "react-page-scroller";

import "./styles.css";

const pageList = [
  {
    id: 0,
    background: `#${Math.floor(Math.random() * 16777215).toString(16)}`
  },
  {
    id: 1,
    background: `#${Math.floor(Math.random() * 16777215).toString(16)}`
  },
  {
    id: 2,
    background: `#${Math.floor(Math.random() * 16777215).toString(16)}`
  },
  {
    id: 3,
    background: `#${Math.floor(Math.random() * 16777215).toString(16)}`
  },
  {
    id: 4,
    background: `#${Math.floor(Math.random() * 16777215).toString(16)}`
  },
];

function App() {
  const [page, setPage] = useState(0);

  return (
    <>
      <div
        style={{
          zIndex: "5",
          position: "fixed",
          bottom: 0,
        }}
      >
        {page > 0 && (
          <>
            <button onClick={() => setPage(page - 1)}>
              Página anterior
            </button>

            <button onClick={() => setPage(0)}>
              Voltar para o início
            </button>
          </>
        )}

        {page < pageList.length - 1 && (
          <>
            <button onClick={() => setPage(page + 1)}>
              Próxima página
            </button>
            <button onClick={() => setPage(pageList.length - 1)}>
              Última
            </button>
          </>
        )}

      </div>

      <ReactPageScroller
        animationTimer={500}
        animationTimerBuffer={0}
        pageOnChange={(newPage) => setPage(newPage)}
        customPageNumber={page}
      >
        {pageList.map((item) => (
          <div
            key={item.id}
            className="content"
            style={{ backgroundColor: item.background, color: '#fff' }}
          >
            <h1>{item.id}</h1>
          </div>
        ))}
      </ReactPageScroller>
    </>
  );
}

export default App;
