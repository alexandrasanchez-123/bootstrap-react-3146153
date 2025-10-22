/* vamos a importar los estilos y componentes de info card */
import { InfoCard } from "./components/infoCard"
import { UserCard } from "./components/UserCard"
import { Libros } from "./components/libros"
import "./App.css"



export function App(){
  return(
    <div>
    <h1>App</h1>
    <InfoCard/> 
    <UserCard image="https://rickandmortyapi.com/api/character/avatar/140.jpeg"userName="Genital Washer"/> 
    <UserCard image="https://rickandmortyapi.com/api/character/avatar/416.jpeg"userName="Moscular Mannie"/> 
    <UserCard image="https://rickandmortyapi.com/api/character/avatar/600.jpeg"userName="Cats Fan"/> 
    <UserCard image="https://rickandmortyapi.com/api/character/avatar/626.jpeg"userName="Tammy Guetermann"/> 

    <Libros image="https://i.postimg.cc/k50d56Bq/mini-magick20190111-23811-9aj1w7.png"userBook="Tres metros sobre el cielo"descripcion="es una historia de amor entre dos jóvenes de mundos opuestos: Babi, una chica de clase media-alta, educada y de buenas costumbres, y Hache, un rebelde impulsivo y aficionado a las peleas y carreras de motos ilegales."/>
    <Libros image="https://i.postimg.cc/y8TKvYQL/images.jpg"userBook="Culpa mía"descripcion="La joven Noah deja todo para mudarse a la mansión de William Leister, el flamante y rico marido de su madre Rafaela. Allí conoce a Nick, su nuevo hermanastro. Ella no tarda en descubrir que, tras la imagen de hijo modelo, Nick oculta algo."/>
    
    <Libros image="https://i.postimg.cc/hjW0vcns/lascivia-libro-2-pecados-placenteros-1.jpg"userBook="Lascivia"descripcion="El libro Lascivia de Eva Muñoz es la primera parte de la saga Pecados placenteros y trata sobre la intensa y complicada relación entre Rachel James, una teniente de la FEMF, y Christopher Morgan, un coronel que se une a la organización. "/>

    <Libros image="https://i.postimg.cc/4xc7dtxq/D-NQ-NP-834635-MLA82295395266-022025-O.webp"userBook="Damián"descripcion="es una novela de misterio y suspense que narra la historia de Padme, una joven que se obsesiona con su peculiar vecino, Damián. Cuando Damián desaparece y regresa con un aura de secreto, Padme lo sigue y descubre que él y el pueblo de Asfil guardan una oscura verdad: pertenecen a un grupo secreto de asesinos llamado los novenos. "/>

    <Libros image="https://i.postimg.cc/j2JKXHmV/1458241-72.jpg"userBook="Perfectos mentirosos"descripcion="es una serie de libros juveniles de romance y misterio de la autora Alex Mírez, que narra la historia de Jude, una joven que ingresa a una universidad de élite y se ve envuelta en un juego de poder y secretos con los poderosos hermanos Cash. "/>
    </div>
    
  )
}