import Button from "@mui/material/Button";
import Header from "./_components/header";
import Imagens from "./_components/imagens";
import { Merriweather, Kanit } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
});
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Home() {
  return (
    <main className="">
      <Header></Header>
      <section
        id="inicio"
        className="flex scroll-mt-40 flex-col items-center justify-center bg-blue-50 bg-[url(/images/background.png)] bg-size-[5em] bg-repeat-round p-10 md:scroll-mt-38"
      >
        <h2 className={`pb-2 text-4xl text-blue-900 ${kanit.className}`}>
          Início
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          pellentesque sodales diam vel pretium. Aliquam posuere cursus mi.
          Aenean sed elit sit amet magna malesuada facilisis. Ut et nulla magna.
          Maecenas viverra, purus efficitur sodales viverra, justo lectus
          consectetur est, a dictum enim orci semper purus. Donec auctor dolor
          quis ante molestie, non ullamcorper eros euismod. Mauris aliquet leo
          magna, vel consequat lectus lobortis ut. Aenean eu gravida mauris. Sed
          sagittis urna non tempor laoreet. Donec ac maximus justo, in blandit
          leo. Praesent ultrices dui a posuere cursus. Praesent eu rutrum
          mauris. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Vivamus aliquam, augue non luctus
          aliquet, metus erat fermentum neque, id tempus diam felis tristique
          ligula. Nam gravida tortor mi, ac mollis erat convallis in. Duis
          auctor ex et tortor malesuada, in ornare felis mollis. Nulla a erat
          finibus, tempor quam vel, porttitor est. Cras laoreet, libero sed
          blandit ultrices, nisl ipsum vestibulum orci, eu varius justo justo
          sed ipsum. Quisque sed vestibulum metus. Sed sit amet magna in mauris
          laoreet rutrum efficitur vitae felis. Nullam bibendum semper ultrices.
          Mauris ut lectus consectetur, tempus tellus at, fringilla libero.
          Nulla imperdiet erat laoreet lobortis rhoncus. Sed vel tincidunt
          libero, vel tempus risus. In ullamcorper semper finibus. Aliquam diam
          eros, lobortis ut pulvinar non, ultricies ut odio. Ut et ornare enim.
          Cras rutrum elementum auctor. Mauris tempor placerat velit eu
          vulputate. Mauris ac nulla mauris. Praesent felis eros, semper at
          risus vitae, suscipit tincidunt felis. Mauris consectetur eleifend
          risus, aliquet maximus turpis fermentum bibendum. Fusce ornare in ex
          nec tempus. Pellentesque iaculis, dolor a ultricies dignissim, arcu
          lectus rhoncus mauris, in viverra diam diam quis felis. Morbi blandit
          ut lacus non lobortis. Etiam pretium, nisi et facilisis eleifend, nibh
          sem fringilla quam, eu commodo lorem purus nec mi. Donec cursus lectus
          orci, accumsan dignissim sapien cursus at. Pellentesque malesuada
          congue augue non sodales. Aenean et neque egestas, dignissim nisi a,
          consequat neque. Fusce venenatis iaculis est, sit amet porttitor lorem
          vehicula vitae. Integer cursus varius consequat. Proin vitae faucibus
          erat. Aenean feugiat urna vulputate elit dignissim feugiat. Duis eget
          feugiat arcu, ut mattis lacus. Praesent consectetur mauris turpis, vel
          lacinia dolor aliquam vel. Duis lectus sapien, accumsan in eleifend
          vehicula, vestibulum ut enim. In malesuada lectus a massa ullamcorper,
          at vulputate ante mattis. Integer at magna placerat, pulvinar dui at,
          euismod ante. Aliquam maximus nibh ac neque eleifend, sit amet
          accumsan felis faucibus. Donec porttitor mollis dolor. Pellentesque ac
          dictum diam. Nulla nibh orci, sagittis non commodo vel, tempus eu sem.
          Curabitur eu lorem a lectus vestibulum pharetra vitae nec turpis.
          Phasellus tempor interdum porta. Fusce accumsan eros orci, auctor
          mollis purus scelerisque sit amet. Nam tempus tellus leo, eget
          dignissim magna convallis efficitur. Mauris at ex ut ipsum consequat
          sodales. Maecenas ut turpis urna. Phasellus eget felis posuere velit
          efficitur sollicitudin. Nunc dolor orci, egestas in vestibulum sit
          amet, varius vel velit. Nunc vitae enim accumsan leo blandit
          scelerisque. Nullam at libero felis. Vivamus luctus volutpat libero
          nec convallis. Nam in sem ac orci porttitor fermentum nec a erat.
          Vivamus ornare tortor felis, a finibus orci fermentum eget. Donec
          tellus diam, tempor et eleifend nec, placerat in tortor. Maecenas sed
          ornare magna. Phasellus scelerisque faucibus varius. Aenean convallis,
          lorem nec pretium sollicitudin, justo sem interdum ligula, sed porta
          felis magna eget nulla. Donec at pharetra urna, in tempus eros. Donec
          pulvinar iaculis ipsum, ac consectetur felis vulputate sit amet. Donec
          diam mi, convallis in venenatis ut, dapibus sed ligula. Praesent
          volutpat eu magna eget finibus. Curabitur lectus lacus, fermentum eu
          leo id, accumsan pharetra ante. Proin mi turpis, condimentum id dui
          et, vehicula condimentum massa. Morbi enim metus, congue eget urna a,
          varius aliquam mauris. Maecenas maximus mi elementum diam pulvinar, a
          varius sapien pharetra. Nulla turpis nunc, condimentum in eleifend
          eget, aliquam ac libero. Maecenas mi sapien, tempor eu scelerisque id,
          porttitor ut eros. Aenean id odio eget dui tincidunt mollis non non
          sapien. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Phasellus rutrum libero non congue
          ultricies. Aliquam eget erat vitae diam egestas sagittis. Nam
          tristique sed lectus et consequat. Fusce semper mollis augue nec
          sodales. Maecenas auctor, arcu congue aliquam consequat, nisl purus
          faucibus massa, id ornare metus massa sed ipsum. Nunc vel lectus quis
          dolor dignissim iaculis ut a metus. Vivamus interdum augue eu leo
          vulputate aliquam. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Pellentesque justo purus,
          pellentesque at lacus at, hendrerit semper felis. Aenean nisl mauris,
          euismod a egestas et, elementum aliquam tellus. Nullam vel lectus et
          metus tempor luctus. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Vivamus ut vulputate enim.
          Morbi a posuere nisl, eget sollicitudin tellus. Nullam ultrices
          faucibus ex, ac dictum erat. Donec eu molestie enim. Phasellus cursus
          in nulla quis accumsan. Sed sit amet purus quis neque consectetur
          pellentesque. Phasellus arcu ante, posuere vitae neque eu, feugiat
          tempor turpis. Suspendisse potenti. Quisque euismod ipsum quis augue
          blandit, nec facilisis tortor dapibus. Etiam blandit urna eu eleifend
          fermentum. Etiam pretium mauris et purus posuere, in vestibulum nisi
          semper. Vestibulum eget mi ac lectus tempus imperdiet nec et ligula.
          Quisque arcu nunc, dapibus in enim nec, eleifend pellentesque enim.
          Praesent vitae neque mi. Nunc sed arcu ultricies, mattis justo ut,
          dignissim metus. Donec et metus tortor. Nullam rutrum nibh eu ipsum
          venenatis imperdiet. Suspendisse egestas ante id lorem commodo
          venenatis. Vivamus quis leo vel erat efficitur porta. Maecenas non
          ullamcorper ipsum, id sollicitudin orci. Curabitur nec feugiat purus.
          Nunc ornare augue tortor, in aliquet sem convallis ac. Proin tristique
          fringilla blandit. Pellentesque consequat leo risus, quis blandit mi
          posuere sed. Maecenas fringilla ornare sem, eget auctor est ultricies
          non. Integer ut enim elit. Fusce nec lacus sed odio suscipit
          condimentum ut a nisi. Nulla ornare justo vel ipsum mattis, eu mollis
          ligula elementum.
        </p>
      </section>
      <section
        id="pautas"
        className="flex scroll-mt-40 flex-col items-center justify-center bg-blue-100 bg-[url(/images/background.png)] bg-size-[5em] bg-repeat-round p-10 md:scroll-mt-38"
      >
        <h2 className={`pb-2 text-4xl text-blue-900 ${kanit.className}`}>
          Pautas
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          pellentesque sodales diam vel pretium. Aliquam posuere cursus mi.
          Aenean sed elit sit amet magna malesuada facilisis. Ut et nulla magna.
          Maecenas viverra, purus efficitur sodales viverra, justo lectus
          consectetur est, a dictum enim orci semper purus. Donec auctor dolor
          quis ante molestie, non ullamcorper eros euismod. Mauris aliquet leo
          magna, vel consequat lectus lobortis ut. Aenean eu gravida mauris. Sed
          sagittis urna non tempor laoreet. Donec ac maximus justo, in blandit
          leo. Praesent ultrices dui a posuere cursus. Praesent eu rutrum
          mauris. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Vivamus aliquam, augue non luctus
          aliquet, metus erat fermentum neque, id tempus diam felis tristique
          ligula. Nam gravida tortor mi, ac mollis erat convallis in. Duis
          auctor ex et tortor malesuada, in ornare felis mollis. Nulla a erat
          finibus, tempor quam vel, porttitor est. Cras laoreet, libero sed
          blandit ultrices, nisl ipsum vestibulum orci, eu varius justo justo
          sed ipsum. Quisque sed vestibulum metus. Sed sit amet magna in mauris
          laoreet rutrum efficitur vitae felis. Nullam bibendum semper ultrices.
          Mauris ut lectus consectetur, tempus tellus at, fringilla libero.
          Nulla imperdiet erat laoreet lobortis rhoncus. Sed vel tincidunt
          libero, vel tempus risus. In ullamcorper semper finibus. Aliquam diam
          eros, lobortis ut pulvinar non, ultricies ut odio. Ut et ornare enim.
          Cras rutrum elementum auctor. Mauris tempor placerat velit eu
          vulputate. Mauris ac nulla mauris. Praesent felis eros, semper at
          risus vitae, suscipit tincidunt felis. Mauris consectetur eleifend
          risus, aliquet maximus turpis fermentum bibendum. Fusce ornare in ex
          nec tempus. Pellentesque iaculis, dolor a ultricies dignissim, arcu
          lectus rhoncus mauris, in viverra diam diam quis felis. Morbi blandit
          ut lacus non lobortis. Etiam pretium, nisi et facilisis eleifend, nibh
          sem fringilla quam, eu commodo lorem purus nec mi. Donec cursus lectus
          orci, accumsan dignissim sapien cursus at. Pellentesque malesuada
          congue augue non sodales. Aenean et neque egestas, dignissim nisi a,
          consequat neque. Fusce venenatis iaculis est, sit amet porttitor lorem
          vehicula vitae. Integer cursus varius consequat. Proin vitae faucibus
          erat. Aenean feugiat urna vulputate elit dignissim feugiat. Duis eget
          feugiat arcu, ut mattis lacus. Praesent consectetur mauris turpis, vel
          lacinia dolor aliquam vel. Duis lectus sapien, accumsan in eleifend
          vehicula, vestibulum ut enim. In malesuada lectus a massa ullamcorper,
          at vulputate ante mattis. Integer at magna placerat, pulvinar dui at,
          euismod ante. Aliquam maximus nibh ac neque eleifend, sit amet
          accumsan felis faucibus. Donec porttitor mollis dolor. Pellentesque ac
          dictum diam. Nulla nibh orci, sagittis non commodo vel, tempus eu sem.
          Curabitur eu lorem a lectus vestibulum pharetra vitae nec turpis.
          Phasellus tempor interdum porta. Fusce accumsan eros orci, auctor
          mollis purus scelerisque sit amet. Nam tempus tellus leo, eget
          dignissim magna convallis efficitur. Mauris at ex ut ipsum consequat
          sodales. Maecenas ut turpis urna. Phasellus eget felis posuere velit
          efficitur sollicitudin. Nunc dolor orci, egestas in vestibulum sit
          amet, varius vel velit. Nunc vitae enim accumsan leo blandit
          scelerisque. Nullam at libero felis. Vivamus luctus volutpat libero
          nec convallis. Nam in sem ac orci porttitor fermentum nec a erat.
          Vivamus ornare tortor felis, a finibus orci fermentum eget. Donec
          tellus diam, tempor et eleifend nec, placerat in tortor. Maecenas sed
          ornare magna. Phasellus scelerisque faucibus varius. Aenean convallis,
          lorem nec pretium sollicitudin, justo sem interdum ligula, sed porta
          felis magna eget nulla. Donec at pharetra urna, in tempus eros. Donec
          pulvinar iaculis ipsum, ac consectetur felis vulputate sit amet. Donec
          diam mi, convallis in venenatis ut, dapibus sed ligula. Praesent
          volutpat eu magna eget finibus. Curabitur lectus lacus, fermentum eu
          leo id, accumsan pharetra ante. Proin mi turpis, condimentum id dui
          et, vehicula condimentum massa. Morbi enim metus, congue eget urna a,
          varius aliquam mauris. Maecenas maximus mi elementum diam pulvinar, a
          varius sapien pharetra. Nulla turpis nunc, condimentum in eleifend
          eget, aliquam ac libero. Maecenas mi sapien, tempor eu scelerisque id,
          porttitor ut eros. Aenean id odio eget dui tincidunt mollis non non
          sapien. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Phasellus rutrum libero non congue
          ultricies. Aliquam eget erat vitae diam egestas sagittis. Nam
          tristique sed lectus et consequat. Fusce semper mollis augue nec
          sodales. Maecenas auctor, arcu congue aliquam consequat, nisl purus
          faucibus massa, id ornare metus massa sed ipsum. Nunc vel lectus quis
          dolor dignissim iaculis ut a metus. Vivamus interdum augue eu leo
          vulputate aliquam. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Pellentesque justo purus,
          pellentesque at lacus at, hendrerit semper felis. Aenean nisl mauris,
          euismod a egestas et, elementum aliquam tellus. Nullam vel lectus et
          metus tempor luctus. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Vivamus ut vulputate enim.
          Morbi a posuere nisl, eget sollicitudin tellus. Nullam ultrices
          faucibus ex, ac dictum erat. Donec eu molestie enim. Phasellus cursus
          in nulla quis accumsan. Sed sit amet purus quis neque consectetur
          pellentesque. Phasellus arcu ante, posuere vitae neque eu, feugiat
          tempor turpis. Suspendisse potenti. Quisque euismod ipsum quis augue
          blandit, nec facilisis tortor dapibus. Etiam blandit urna eu eleifend
          fermentum. Etiam pretium mauris et purus posuere, in vestibulum nisi
          semper. Vestibulum eget mi ac lectus tempus imperdiet nec et ligula.
          Quisque arcu nunc, dapibus in enim nec, eleifend pellentesque enim.
          Praesent vitae neque mi. Nunc sed arcu ultricies, mattis justo ut,
          dignissim metus. Donec et metus tortor. Nullam rutrum nibh eu ipsum
          venenatis imperdiet. Suspendisse egestas ante id lorem commodo
          venenatis. Vivamus quis leo vel erat efficitur porta. Maecenas non
          ullamcorper ipsum, id sollicitudin orci. Curabitur nec feugiat purus.
          Nunc ornare augue tortor, in aliquet sem convallis ac. Proin tristique
          fringilla blandit. Pellentesque consequat leo risus, quis blandit mi
          posuere sed. Maecenas fringilla ornare sem, eget auctor est ultricies
          non. Integer ut enim elit. Fusce nec lacus sed odio suscipit
          condimentum ut a nisi. Nulla ornare justo vel ipsum mattis, eu mollis
          ligula elementum.
        </p>
      </section>
      <section
        id="imagens"
        className="flex scroll-mt-40 flex-col items-center justify-center bg-blue-200 bg-[url(/images/background.png)] bg-size-[5em] bg-repeat-round p-10 md:scroll-mt-38"
      >
        <h2 className={`pb-5 text-4xl text-blue-900 ${kanit.className}`}>
          Imagens
        </h2>
        <Imagens></Imagens>
      </section>
      <section
        id="junte-se"
        className="flex scroll-mt-40 flex-col items-center justify-center gap-5 bg-blue-300 bg-[url(/images/background.png)] bg-size-[5em] bg-repeat-round p-10 md:scroll-mt-38"
      >
        <h2 className={`text-4xl text-blue-900 ${kanit.className}`}>
          Junte-se a nós
        </h2>

        <p className="text-blue-600">Clique aqui para se afiliar a gente!</p>
        <Button
          variant="contained"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdyRTSdxZSwVULfxrlAjU0I8pMZQt6cH1yFnHx22dhBjul-XQ/viewform?usp=send_form"
        >
          Filie-se
        </Button>
      </section>
    </main>
  );
}
