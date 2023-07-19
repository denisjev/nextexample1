import { getDataPerson } from '../../services/servicesPerson'

export default async function PagePerson () {
  const data = await getDataPerson()

  return (
    <div>
      {data.map(m =>
        <div key={m.id}>{m.title}
          <br />
        </div>
      )}
    </div>
  )
}
