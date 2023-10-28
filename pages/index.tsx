
export default function Home() {
  return (
    <div className="index">
      <div className="box1">
      <h1 >L3CHRA APP</h1>
      </div>
    <div className="box2">
    <a href="/login">Login</a>
    </div>
    <div className="box3">
      <a href="/register">Register</a>
    </div>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
