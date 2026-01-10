import './App.css'
import { useState } from "react";
import dot1 from './dot1.png'
import dot2 from './dot2.png'

const datas = [
  {'data' : 'Qua, 14',
   'info' : [
      {
         'id' : 1,
         'horario' : '7:00',
         'duracao' : '3:00',
         'nivel' : 'Iniciante',
         'atividade' : 'Tutorial',
         'titulo' : 'Python para Finanças: Primeiros Passos',
         'descricao' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
         'palestrante' : [
           {
             'nome' : 'Ana Silva',
             'foto' : dot1
           },
           {
             'nome' : 'Carlos Mendes',
             'foto' : dot2
           },
         ]
      },
      {
         'id' : 2,
         'horario' : '7:00',
         'duracao' : '3:00',
         'nivel' : 'Iniciante',
         'atividade' : 'Tutorial',
         'titulo' : 'Python para Finanças: Primeiros Passos',
         'descricao' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
         'palestrante' : [
           {
             'nome' : 'Ana Silva',
             'foto' : dot1
           },
           {
             'nome' : 'Carlos Mendes',
             'foto' : dot2
           },
         ]
      },
      {
         'id' : 3,
         'horario' : '7:00',
         'duracao' : '3:00',
         'nivel' : 'Iniciante',
         'atividade' : 'Tutorial',
         'titulo' : 'Python para Finanças: Primeiros Passos',
         'descricao' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
         'palestrante' : [
           {
             'nome' : 'Ana Silva',
             'foto' : dot1
           },
           {
             'nome' : 'Carlos Mendes',
             'foto' : dot2
           },
         ]
      },
      {
         'id' : 4,
         'horario' : '7:00',
         'duracao' : '3:00',
         'nivel' : 'Iniciante',
         'atividade' : 'Tutorial',
         'titulo' : 'Python para Finanças: Primeiros Passos',
         'descricao' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
         'palestrante' : [
           {
             'nome' : 'Ana Silva',
             'foto' : dot1
           },
           {
             'nome' : 'Carlos Mendes',
             'foto' : dot2
           },
         ]
      }
    ]
  },
  {'data' : 'Qui, 15',
   'info' : 
   [
    {
      'id' : 4,
      'horario' : 'n/a',
      'duracao' : 'n/a',
      'nivel' : 'n/a',
      'atividade' : 'n/a',
      'titulo' : 'Sem nada selecionado para o dia 15',
      'descricao' : 'n/a',
         'palestrante' : [
           {
             'nome' : 'n/a',
             'foto' : "n/a"
           },
           {
             'nome' : 'n/a',
             'foto' : 'n/a'
           },
         ]
    }
   ]
  },
  {'data' : 'Sex, 16',
   'info' : 
   [
    {
      'id' : 4,
      'horario' : 'n/a',
      'duracao' : 'n/a',
      'nivel' : 'n/a',
      'atividade' : 'n/a',
      'titulo' : 'Sem nada selecionado para o dia 16',
      'descricao' : 'n/a',
         'palestrante' : [
           {
             'nome' : 'n/a',
             'foto' : "n/a"
           },
           {
             'nome' : 'n/a',
             'foto' : 'n/a'
           },
         ]
    }
   ]
  },
  {'data' : 'Sab, 17',
   'info' : 
   [
    {
      'id' : 4,
      'horario' : 'n/a',
      'duracao' : 'n/a',
      'nivel' : 'n/a',
      'atividade' : 'n/a',
      'titulo' : 'Sem nada selecionado para o dia 17',
      'descricao' : 'n/a',
         'palestrante' : [
           {
             'nome' : 'n/a',
             'foto' : "n/a"
           },
           {
             'nome' : 'n/a',
             'foto' : 'n/a'
           },
         ]
    }
   ]
  },
  {'data' : 'Dom, 18',
   'info' : 
   [
    {
      'id' : 4,
      'horario' : 'n/a',
      'duracao' : 'n/a',
      'nivel' : 'n/a',
      'atividade' : 'n/a',
      'titulo' : 'Sem nada selecionado para o dia 18',
      'descricao' : 'n/a',
         'palestrante' : [
           {
             'nome' : 'n/a',
             'foto' : "n/a"
           },
           {
             'nome' : 'n/a',
             'foto' : 'n/a'
           },
         ]
    }
   ]
  },
  {'data' : 'Seg, 19',
   'info' : 
   [
    {
      'id' : 4,
      'horario' : 'n/a',
      'duracao' : 'n/a',
      'nivel' : 'n/a',
      'atividade' : 'n/a',
      'titulo' : 'Sem nada selecionado para o dia 19',
      'descricao' : 'n/a',
         'palestrante' : [
           {
             'nome' : 'n/a',
             'foto' : "n/a"
           },
           {
             'nome' : 'n/a',
             'foto' : 'n/a'
           },
         ]
    }
   ]
  },
]

export default function App() {
  const [index, setIndex] = useState(0);

  return (<div className='datas'>
      <div className='paine_de_datas'>
        {datas.map((data, index) => (
          <div className="datas_palestras" key={index} onClick={() => setIndex(index)}>
            <h2>{data.data}</h2>
          </div>
        ))}
      </div>

        <div>
          {datas[index]['info'].map((data, index) => (
            <div className='card_palestra' key={index}>
              <div className='card_palestra_infos_1'>
                <h6>{data['horario']}</h6>
                <h6>{data['duracao']}</h6>
                <h6>{data['nivel']}</h6>
                <h6>{data['atividade']}</h6>
              </div>
              <div className='card_palestra_infos_2'>
                <h3>{data['titulo']}</h3>
                <h3>{data['descricao']}</h3>
              </div>
              <div className='card_palestra_infos_3'></div>
            </div>
          ))}
        </div>
  </div>)
}