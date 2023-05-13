import { useEffect, useState } from "react"
import axios from 'axios'
import BasicTable from "./components/Admin"
import { Grid, Input } from "@mui/material"

function App() {
  const [query, setQuery] = useState("")
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchUSers = async () => {
      const res = await axios.get(`https://backend-api-hrsm.onrender.com/?q${query}`)
      setData(res.data)
    }
    if (query.length === 0 || query.length > 2) {
      fetchUSers()
    }
  }, [query])

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >

        <Grid item xs={3}>
          <Input typeof="search" className="search" placeholder="search ..." onChange={(e) => setQuery(e.target.value)} />
        </Grid>
        <Grid>
          <BasicTable data={data} />
        </Grid>

      </Grid>
    </>
  )
}

export default App
