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

<h2>23.02.17 - HTML - 태그</h2>

a태그는 링크를 걸을 때 사용.
./ 현재위치에서 ../ 상위위치에서 위치파악이 중요함
<br> img태그는 사진을 넣을 때 닫기태그 없음
<br> 동영상태그를 자동재생할 땐 무음처리해주기.

<hr>
<h2>23.02.20 - HTML - 표태그</h2>
<p>&lt;table&gt; : 표를 만드는 태그<p>
<table>
  <thead>
    <tr>
      <th>구분</th>
      <th>태그명</th>
      <th>의미</th>
    </tr>
  </thead>
  <tbody>
      <tr>
      <td rowspan="3">block</td>
      <td>&lt;tr&gt;</td>
      <td>가로행 태그</td>
      </tr>
      <tr>
      <td>&lt;td&gt;</td>
      <td>내용(열) 태그</td>
      </tr>
       <tr>
      <td>&lt;th&gt;</td>
      <td>제목(열) 태그</td>
      </tr>
      <tr>
      <td colspan="3">colspan : 가로열합치기</td>
      </tr>
      <tr>
      <td colspan="3">rowspan : 세로열합치기</td>
      </tr>
  </tbody>
</table>
<hr>
<h2>23.02.21 - HTML - form태그</h2>
<p>&lt;form&gt; : 입력, 태그, 양식 설정<p>
<form action="#" method="get">
  <fieldset>
    <legend>form 퀴즈</legend>
    <span>다음 중 label for과 연관된 input 속성은?</span><br>
    <label><input tyoe="radio" name="quiz" value="id">1. id</label>
    <label><input type="radio" name="quiz" value="class">2. class</label>
    <label><input type="radio" name="quiz" value="name">3. name</label>
    <span>다음 중 옳은 것을 모두 고르시오</span>
    <label><input type="checkbox" name="quiz2" value="2_1">label을 따로묶어줄 때 굳이 id를 사용하지 않아도 된다.</label><br>
    <label><input type="checkbox" name="quiz2" value="2_2">name은 그룹의 이름이며 다른 그룹과 이름이 겹쳐서는 안된다.</label><br>
    <label><input type="checkbox" name="quiz2" value="2_3">value는 다른 값과 겹쳐도 괜찮다.</label>
  </fieldset>
</form>
<hr>
<h2>23.02.23 - CSS - 선택자</h2>
<p>태그선택자 : HTML의 특정 태그를 선택</p>
<blockquote>h1 {background-color:yellow;}</blockquote>
중괄호{} 앞에 태그&lt;h1&gt;를 쓰면 그 태그 전체에 스타일이 적용.
<p>클래스, 아이디 선택자</p>
<blockquote>.test_box {background-color:aqua;}</blackquote>
클래스 선택자 : 반복적인 디자인 요소를 적용 시 사용    .(점)으로 표현
<p>자식 선택자</p></blockquote>
<hr>
<h2>23.02.24 - CSS - 선택자</h2>
<br>border : 선 추가
<br>color : 글씨색 변경
<br>background-color : 배경색
<br>line-height : 행간
<br>text-weight : 글씨굵기 변경
<hr>
<h2>23.02.27 - CSS - 레이아웃태그</h2>
<p>float : 위치조절</p> 
<p>float을 적용할 땐 모든 형제들에게 다 적용시켜줘야 한다.</p>
<dl><dt>float적용시 생기는 부모오류 해결방법</dt>
    <dd>높이 강제 부여 : ex) 부모 {height:100px;} </dd>
    <dd>자식높이 재인식 : ex) 부모 {overflow:hidden;} </dd>
    <dd>가상자식 생성 : </dd>
    </dl>
<hr>
<h2>23.03.03 - CSS - </h2>
<blockquote> white-space:nowrap; /* 한줄처리 */ <br>
overflow:hidden; /* 정해진 크기 안에서만 보이기 */ <br>
text-overflow:ellipsis; /* 외부처리를 말줄임... */ </blockquote>
