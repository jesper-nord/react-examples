const Component = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://example.com/data')
      .then(response => setData(response.data))
      .catch(error => setError(error))  
  }, [])

  if (error) {    
    return <span className='error'>{error.message}</span>  
  }

  return data ? <div>{data.property}</div> : <span>Loading...</span>
}
