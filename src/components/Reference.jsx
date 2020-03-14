import React from "react";

const defaultSVG = `
  шеңбер(100, 100, 30, 'black', 'yellow')
  шеңбер(90, 90, 5, 'gray', 'gray')
  шеңбер(110, 90, 5, 'gray', 'gray')
  шеңбер(100, 103, 2, 'gray', 'red')
  қисық('90,115 95,118 105,118 110,115 90,115', 'gray', 'white', 1)
`;

export default function Reference({ setCode }) {
  return (
    <div className="reference">
      <h3>Кодпен сурет салуға қош келдіңіз!😉✋🖼</h3>
      <p>
        Сол жағындағы бұл коммандалар тақтасы. Сіз онда коммандалар жазасыз.
      </p>
      <p>
        Оң жағындағы бұл сурет тақтасы. Онда коммандалар бойынша суреттер пайда
        болады.
      </p>
      <h4>
        Ал үстінде сізге қарап тұрған бұл - Тәте! Сондықтан суретті дұрыстап
        және әдему салу керек!
      </h4>
      <p>Әзірге сіздің сала алатын фигураларыңыз:</p>
      <ul>
        <li>
          <b>төртбұрыш</b>
          <p>
            <i>
              төртбұрыш салу үшін, алдымен "төртбұрыш" деп жазып, жақшаның ішіне{" "}
            </i>
            <ul>
              <li>x бойынша басын,</li>
              <li>y бойынша басын,</li>
              <li>ұзындығын,</li>
              <li>биіктігін,</li>
              <li>сыртының түсін (міндетті емес),</li>
              <li>iшінің түсін (міндетті емес)</li>
            </ul>
            көрсету керек
          </p>
          <div className="reference-sample">
            <p>мысалы, төртбұрыш(10, 50, 100, 30, 'blue', 'red')</p>
            <button
              onClick={() =>
                setCode("төртбұрыш(10, 50, 100, 30, 'blue', 'red')")
              }
            >
              көру
            </button>
          </div>
          <h5>
            Түстер міндетті түрде ағылшынша және тырнақшаның ішіне жазылады!
          </h5>
          <br />
        </li>
        <li>
          <b>шеңбер</b>
          <p>
            <i>шеңбер салу үшін, алдымен "шеңбер" деп жазып, жақшаның ішіне </i>
            <ul>
              <li>x бойынша ортасын,</li>
              <li>y бойынша ортасын,</li>
              <li>радиусын</li>
              <li>сыртының түсін (міндетті емес),</li>
              <li>iшінің түсін (міндетті емес)</li>
            </ul>
            көрсету керек
          </p>
          <div className="reference-sample">
            <p>мысалы, шеңбер(110, 150, 100, 'green', 'yellow')</p>
            <button
              onClick={() =>
                setCode("шеңбер(110, 150, 100, 'green', 'yellow')")
              }
            >
              көру
            </button>
          </div>
          <h5>
            Түстер міндетті түрде ағылшынша және тырнақшаның ішіне жазылады!
          </h5>
          <br />
        </li>
        <li>
          <b>түзу</b>
          <p>
            <i>түзу салу үшін, алдымен "түзу" деп жазып, жақшаның ішіне </i>
            <ul>
              <li>x бойынша бірінші координатасын,</li>
              <li>y бойынша бірінші координатасын,</li>
              <li>x бойынша екінші координатасын,</li>
              <li>y бойынша екінші координатасын,</li>
              <li>қалыңдығын (міндетті емес)</li>
              <li>iшінің түсін (міндетті емес)</li>
            </ul>
            көрсету керек
          </p>
          <div className="reference-sample">
            <p>мысалы, түзу(10, 10, 100, 100, 5, 'teal')</p>
            <button
              onClick={() => setCode("түзу(10, 10, 100, 100, 5, 'teal')")}
            >
              көру
            </button>
          </div>
          <h5>
            Түстер міндетті түрде ағылшынша және тырнақшаның ішіне жазылады!
          </h5>
          <br />
        </li>
        <li>
          <b>қисық сызықтар</b>
          <p>
            <i>
              қисық сызықтар салу үшін, алдымен "қисық" деп жазып, жақшаның
              ішіне{" "}
            </i>
            <ul>
              <li>тырнақшаның ішіне бос орын арқылы x,y координаталарын</li>
              <li>iшінің түсін (міндетті емес)</li>
              <li>сыртының түсін (міндетті емес)</li>
              <li>қалыңдығын (міндетті емес)</li>
            </ul>
            көрсету керек
          </p>
          <div className="reference-sample">
            <p>
              мысалы, қисық('10,10, 100,100, 100,10 10,10', 'pink', 'orange', 3)
            </p>
            <button
              onClick={() =>
                setCode(
                  "қисық('10,10, 100,100, 100,10 10,10', 'pink', 'orange', 3)"
                )
              }
            >
              көру
            </button>
          </div>
          <h5>
            Түстер міндетті түрде ағылшынша және тырнақшаның ішіне жазылады!
          </h5>
          <br />
        </li>
      </ul>
      <h2>Тәтеден бір мысал:</h2>
      <p>
        шеңбер(100, 100, 30, 'black', 'yellow')
        <br />
        шеңбер(90, 90, 5, 'gray','gray')
        <br />
        шеңбер(110, 90, 5, 'gray', 'gray')
        <br />
        шеңбер(100, 103, 2, 'gray','red')
        <br />
        қисық('90,115 95,118 105,118 110,115 90,115', 'gray', 'white', 1)
        <button onClick={() => setCode(defaultSVG)}>көру</button>
      </p>
    </div>
  );
}