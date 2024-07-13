import ClipLoader from "react-spinners/ClipLoader";


const override = {
    display: "block"
  
}

const Spinner = () => {
  return (
    <ClipLoader 
     loading={true}
     cssOverride={override}
     size={150}
     color="#2A192B"
    />
  )
}

export default Spinner