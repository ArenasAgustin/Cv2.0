import SeccionPersonal from "../../components/SeccionPersonal/SeccionPersonal";
import SeccionExperiencia from "../../components/SeccionExperiencia/SeccionExperiencia";
import './Home.css'

export default function Home() {
  return (
    <div className='divHome'>
      <div className="divSeccionPersonal">
        <SeccionPersonal />
      </div>

      <div className="divSeccionExperiencia">
        <SeccionExperiencia />
      </div>
    </div>
  );
}
