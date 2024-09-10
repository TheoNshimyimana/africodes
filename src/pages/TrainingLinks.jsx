import { Link } from "react-router-dom"

function TrainingLinks() {
    return (
      <div>
        <Link to={'/traings'}>
          <h1 className="text-3xl lg:text-4xl font-bold text-center mt-5 text-custom-blue mb-8">
            T24 Training Videos
          </h1>
        </Link>
      </div>
    )
}

export default TrainingLinks
