import React, { useState, useEffect, useCallback} from 'react';

import { Container, Progress } from './styles';

const App: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const getDocHeight = useCallback(() => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }, [])

  const calculateScrollDistance = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const currentDocHeight = getDocHeight();

    const totalDocScrollLength = currentDocHeight - winHeight;
    const newScrollPosition = Math.floor(scrollTop / totalDocScrollLength * 100)

    setScrollPosition(newScrollPosition);

  }, [getDocHeight])

  useEffect(() => {
    const onScroll = () => calculateScrollDistance();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [calculateScrollDistance]);

  return (
    <Container>
      <Progress scroll={scrollPosition + '%'} />
      <header></header>
      <main>
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis lorem nulla, id pretium lacus facilisis sit amet. Curabitur eleifend justo ac dolor ultricies, in tempus nibh efficitur. Donec libero neque, interdum eu convallis in, ornare ut arcu. Fusce ullamcorper in velit dictum ultricies. Morbi eleifend rutrum nibh, nec molestie augue consequat non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque imperdiet enim eu ligula laoreet, sed dictum erat maximus. Pellentesque non turpis tristique, scelerisque erat ac, auctor erat. Duis ultrices orci felis, vel iaculis leo gravida quis. Aliquam non neque lacinia tellus tempus hendrerit pulvinar eget nulla. Nullam metus justo, interdum quis interdum et, feugiat at justo. Nunc at ullamcorper velit.
        </p>
        <p>
          Nullam congue, mauris vel hendrerit congue, felis tortor mollis arcu, sed viverra dolor ex sit amet felis. Sed vitae sapien quis nibh maximus tincidunt convallis eu est. Proin eget nisi scelerisque, euismod erat vestibulum, pharetra arcu. Nunc commodo odio eu nisl molestie tempus. Pellentesque sit amet eros et nisl porttitor viverra. Nam cursus eget elit id placerat. Duis scelerisque iaculis mauris, eu sollicitudin libero varius nec.
        </p>
        <p>
          Praesent arcu diam, ullamcorper ut diam varius, faucibus tincidunt libero. Morbi porta mi eu consectetur suscipit. Ut lacinia tortor vitae augue facilisis, vel blandit est accumsan. Nunc tellus est, semper in dui ut, pellentesque fermentum risus. Curabitur varius pretium iaculis. In tristique ante massa, et malesuada urna volutpat non. Proin vel sapien eu libero venenatis aliquam. Ut interdum lectus nec leo finibus ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eget consectetur nibh. Cras venenatis scelerisque eros, a porttitor eros hendrerit in. Quisque scelerisque sodales tellus, eu porta nibh commodo vitae.
        </p>
        <p>
          Curabitur iaculis ipsum sed felis cursus, ac laoreet ligula ornare. Vivamus ullamcorper, nibh a venenatis fermentum, ex leo luctus magna, eget molestie nunc felis non nulla. Pellentesque mattis, erat nec iaculis hendrerit, augue felis bibendum velit, sed condimentum ante massa sed lacus. In sed lorem magna. Sed quis auctor quam. In hac habitasse platea dictumst. Nunc id porta urna. Cras vel nulla ultricies, tempus ligula sit amet, tempus metus. In lobortis porttitor magna in lacinia. Integer molestie laoreet ligula a vestibulum. Duis sed enim a eros fermentum dignissim. Fusce dolor dui, lacinia ac enim quis, mollis viverra mauris. Mauris consequat euismod lacus ut tempor. Proin volutpat vel leo id posuere.
        </p>
        <p>
          Mauris quis efficitur purus. Aliquam quis quam bibendum, bibendum ante non, tincidunt elit. Nulla vehicula, justo ac aliquam imperdiet, dui lorem accumsan elit, interdum gravida elit mi a orci. Morbi hendrerit elementum volutpat. Nunc mattis ipsum nulla, sed dignissim erat sollicitudin et. Nunc non consectetur quam, et efficitur diam. Cras fermentum nec urna vitae egestas. Donec rutrum aliquam ipsum sit amet tempor. Praesent placerat justo nunc, non vestibulum nunc sagittis quis. Vestibulum justo augue, euismod ut feugiat et, rhoncus quis eros. Duis sollicitudin erat eros, feugiat finibus mauris consequat vitae. Maecenas quam neque, pulvinar ut velit eget, pretium commodo sem. Vivamus ornare nulla nec nisi cursus rhoncus.
        </p>
        <p>
          Quisque eleifend dui in ipsum pretium sagittis. Phasellus lectus ex, mollis non dui sit amet, feugiat rhoncus tortor. Nullam purus eros, eleifend sed mollis non, sodales gravida turpis. Mauris dapibus purus felis, sit amet interdum est eleifend vel. Aenean fermentum feugiat lobortis. In id ligula auctor, porta nisl sed, vulputate turpis. Donec leo lorem, vulputate a massa pellentesque, cursus pulvinar nunc.
        </p>
        <p>
          Sed ac massa condimentum, sollicitudin sem eget, maximus leo. Mauris risus sem, feugiat semper blandit non, aliquam ut est. Morbi neque nisl, semper eget maximus id, dictum non mauris. Donec nec erat rhoncus, varius ipsum sed, sagittis neque. Ut efficitur massa eu risus tincidunt volutpat. Aenean faucibus consectetur turpis, at pulvinar quam volutpat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus lacus non pretium sollicitudin. Integer pellentesque libero sit amet tristique pulvinar. In nisi massa, fringilla ac commodo id, sollicitudin quis libero. Aenean luctus odio eu placerat elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla accumsan pretium nisl, vitae vestibulum urna. Vestibulum vitae ligula mauris. Maecenas mattis, velit sit amet efficitur placerat, arcu odio blandit lacus, et convallis justo mauris eu nisl. Aliquam aliquam nulla dapibus est facilisis tristique.
        </p>
        <p>
          In ornare sollicitudin massa vitae commodo. Aliquam tristique est id nulla semper sodales. Phasellus dapibus fermentum nisl, a tristique orci molestie at. Sed eu dictum lorem, nec consectetur lorem. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin bibendum id erat vel commodo. In in orci ut nisi luctus feugiat posuere sed velit. Proin fermentum pharetra lacus et suscipit. Donec quam magna, consequat vel finibus ut, porttitor maximus metus. Donec venenatis felis in enim mattis, eu viverra ipsum facilisis. In dignissim elementum nisl, vel ornare turpis. Sed ultrices elementum tincidunt. Integer suscipit volutpat sapien, nec viverra libero pulvinar eu. Donec ut risus justo. Nam nunc metus, dignissim vel pretium ac, fringilla a risus.
        </p>
        <p>
          Ut sed tortor ex. Integer ut tincidunt risus. Cras bibendum, tortor a vehicula luctus, justo leo facilisis felis, vitae accumsan ante ipsum quis est. Maecenas convallis ultrices suscipit. Donec in mi sit amet risus lobortis dictum eu eget erat. Nunc rhoncus imperdiet consequat. Nulla ullamcorper nisl mi. Mauris tincidunt nulla at dictum commodo. Suspendisse potenti.
        </p>
        <p>
          Nam vitae sagittis tortor. Quisque et sem sed purus varius egestas ac vitae turpis. Integer varius justo non dictum tincidunt. Ut porta tellus ut nibh scelerisque, non viverra erat rutrum. Sed faucibus ipsum elit, quis malesuada ipsum aliquam at. Fusce molestie lacus a nibh pulvinar cursus. Aliquam varius tempor rutrum.
        </p>
        <p>
          Cras sed luctus risus. Fusce non blandit lacus. Nam elementum interdum tellus, nec mattis augue porttitor in. Aenean auctor dolor sit amet nisi dignissim, ullamcorper porttitor lectus blandit. Praesent laoreet tellus et consectetur dictum. Mauris justo arcu, elementum quis nisi id, bibendum maximus purus. Nam euismod aliquam scelerisque. Nullam a ullamcorper velit.
        </p>
        <p>
          Integer vitae leo nec ligula aliquet feugiat sit amet vitae ex. Quisque viverra bibendum vestibulum. Morbi a diam metus. Nullam efficitur metus id erat mollis, vitae imperdiet sem consequat. Aliquam velit mauris, lacinia et erat ut, gravida ullamcorper tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam ac sem vitae leo sodales mattis.
        </p>
        <p>
          Etiam ac augue id justo aliquet pulvinar in quis enim. Vestibulum pretium mauris urna, sed porttitor urna blandit eget. Donec sodales tempor lacus ut varius. Donec efficitur ipsum mauris, ut mollis turpis tempus eu. Suspendisse tincidunt est a lacus pretium, quis consectetur lacus aliquam. Pellentesque dictum felis nulla, vel pretium metus tristique ultricies. Sed bibendum maximus ullamcorper. Sed dapibus nec nisi at accumsan. Cras faucibus velit in mollis varius. Nulla mattis ligula odio, in euismod nibh tincidunt vel. Donec ultricies augue vel lacus ultricies venenatis vel vitae nunc.
        </p>
        <p>
          Sed finibus nulla tortor. Praesent tincidunt luctus urna, cursus pellentesque dolor. Etiam non eros ut elit scelerisque condimentum vitae nec purus. In dapibus mi gravida tellus dapibus, nec vestibulum sapien eleifend. Morbi cursus ullamcorper nisl, et condimentum mauris lacinia vitae. Vivamus imperdiet purus lectus, et commodo lacus aliquet eget. Ut tristique augue dolor, ac venenatis diam porttitor vitae. Nullam molestie justo non vestibulum rhoncus. Quisque lobortis aliquet mi, ac lacinia ex vehicula vitae. Vivamus cursus, leo et iaculis sollicitudin, purus nisl tempor nisi, finibus varius nisi sapien eu lacus. Sed viverra ac felis non fringilla. Nulla ut metus eget lorem porttitor imperdiet. Sed purus enim, lacinia eget mi eget, fringilla sodales tellus. In rutrum diam sed dolor egestas, vel fringilla lectus euismod. Etiam nulla neque, ornare et purus nec, gravida sagittis nulla.
        </p>
        <p>
          Maecenas nisi magna, interdum eget leo vitae, consequat commodo tellus. Duis interdum auctor nulla, ut euismod est gravida eget. Sed viverra id tellus non consectetur. Pellentesque facilisis dolor non tincidunt commodo. Etiam ac lobortis lectus, sit amet iaculis elit. Vivamus tellus odio, viverra quis faucibus quis, varius sit amet neque. Fusce quis orci dapibus augue accumsan bibendum sit amet placerat purus. Praesent vitae pharetra est. Pellentesque massa turpis, tempor eu aliquam sit amet, cursus eu nibh. Phasellus bibendum, lacus non iaculis commodo, nibh velit facilisis ex, at pretium turpis massa sit amet metus. Sed facilisis, nisl ut rhoncus sagittis, justo lacus rutrum felis, sed iaculis elit sem ac nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce commodo ipsum ex.
        </p>
      </main>
    </Container>
  );
}

export default App;
