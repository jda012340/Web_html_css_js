<h1>&lt;반응형 웹디자인/웹퍼블리셔 양성과정 버전기록&gt;</h1>
  <p>날짜-제목-요약</p>
  <h2>23.02.13 html</h2>
  <P>h1~h6, p, br,inline, block</p>
  <p>h1~h3은 검색키워드로도 활용가능하다. h4~h6은 꼭 필요한 경우만 이용하거나 권장하지 않음.</p>
  <p>block과 inline태그는 의미에 맞게 외부/내부 구조로 구성해서 사용해야한다.(의미 중첩되지 않도록 주의하며 사용)</P>
<hr>
<h2>23.02.14 - HTML - 문서태그</h2>
  <h3>학습내용</h3>
    <p>strong,em,sub,sup,del,blockquote,q,code,address,code</p>
    <p>gnb, lnb, snb, fnb, Breadcrumbs</p>
    <p>[inline 태그]
    *inline 태그사용시 주의사항. block태그 안에 넣을 것. inline태그 옆에는 inline태그만.</p>
    <h3>내용정리</h3>
    <h4>[문서태그]</h4>
     <p><strong>&lt;strong&gt;</strong> 시각적 강조         <em>&lt; em &gt;</em> 내용의 의미 강조         <del>&lt;del&gt;</del> 글씨에 빗금</p>
     <br><p><q>&lt;q&gt;</q>짧은 인용문, 외부에서 가져온 내용을 첨부할 때.
     <br><blockquote>&lt;blockquote&gt;</blockquote> <p>긴 인용문, 외부에서 가져온 내용을 블록단위로 첨부할 때.</p>
     <br>&lt;hr&gt; 구분선.</p>
<hr>
  <h2>23.02.15 - HTML - 목록태그</h2>
  <h3>학습내용</h3>
    <p>ol,ul,li,dl,dt,dd 태그의 가족관계
  <h3>내용정리</h3>
  <h4>[목록태그]</h4>
    <p><em>목록태그들은 전부 ⓑ, block태그들이다.</em></p>
    <ol><li>&lt;ol&gt;태그는 &lt;li&gt; 순서가 있는 목록의 틀이다.</li>
        <li>&lt;ol&gt;태그의 자식은 &lt;li&gt;이어야 한다.</li></ol>
    <ul><li>&lt;ul&gt;태그는 순서가 없는 목록의 틀이다.</li>
    <li>&lt;ul&gt;태그의 자식은 &lt;li&gt;이어야 한다.</li></ul>
    <p>&lt;li&gt;의 형제태그는 &lt;li&gt;만 존재할 수 있다.
  <h4>[정의형목록태그]</h4>
  <dl>
    <dt>&lt;dl&gt; : 틀</dt>
      <dd>&lt;dt&gt; : 제목
      <br>&lt;dd&gt; : 내용</dd>
  </dl>
  <hr>
  <div class="study"><h2>23.02.16 - HTML - 레이아웃태그</h2>
  <h3>학습내용</h3>
    <p>main,div,header,navsection,aside,article,footer,figure,main,mark,class,skip
  <h3>내용정리</h3>
  <h4>[시멘틱 태그]</h4>
  <dl>
  <dt>ⓑdiv</dt>
  <dd>figma에서 frame과 같은 역할.</dd>
  <dd>class를 사용하여 이름을 정의해주어야 한다.</dd>
  <dt>class</dt>
  <dd>이름을 정의해줄 수 있다.</dd>
  <dt>skip</dt>
  <dd>나중에 css에서 skip이 붙은 부분을 숨김처리할 수 있다.</dd>
    <dd><q>&lt;dt class="skip"&gt;현재 페이지 경로&lt;/dt&gt;</q></dd>
  </dl>
  </div class="study">

<h2>23.02.16 - HTML - 태그</h2>

a태그는 링크를 걸을 때 사용.
./ 현재위치에서 ../ 상위위치에서

  
