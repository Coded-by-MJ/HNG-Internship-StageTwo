import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
     padding: "30px", height: '400px', backgroundColor: "#fff"}}>
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
     <Link to="/">Go Home</Link>
    </div>
  );
  
}

export default NotFoundPage;