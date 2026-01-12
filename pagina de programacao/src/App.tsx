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
         'nivel' : {
              'br' : 'Iniciante',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
          },
         'atividade' : {
              'br' : 'Tutorial',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
         },
         'titulo' : {
              'br' : 'Python para Finanças: Primeiros Passos',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
          }
          ,
         'descricao' : {
              'br' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
              'en' : 'Em ingles',
              'es' : 'Em espanhol',
          },
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
         'nivel' : {
              'br' : 'Iniciante',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
          },
         'atividade' : {
              'br' : 'Tutorial',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
         },
         'titulo' : {
              'br' : 'Python para Finanças: Primeiros Passos',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
          }
          ,
         'descricao' : {
              'br' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
              'en' : 'Em ingles',
              'es' : 'Em espanhol',
          },
         'palestrante' : [
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
         'nivel' : {
              'br' : 'Iniciante',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
          },
         'atividade' : {
              'br' : 'Tutorial',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
         },
         'titulo' : {
              'br' : 'Python para Finanças: Primeiros Passos',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
          }
          ,
         'descricao' : {
              'br' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
              'en' : 'Em ingles',
              'es' : 'Em espanhol',
          },
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
         'nivel' : {
              'br' : 'Iniciante',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
          },
         'atividade' : {
              'br' : 'Tutorial',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
         },
         'titulo' : {
              'br' : 'Python para Finanças: Primeiros Passos',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
          }
          ,
         'descricao' : {
              'br' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
              'en' : 'Em ingles',
              'es' : 'Em espanhol',
          },
         'palestrante' : [
           {
             'nome' : 'Ana Silva',
             'foto' : dot1
           },
         ]
      },
    ]
  },
  {'data' : 'Qui, 15',
   'info' : 
   [
    {
      'id' : 4,
      'horario' : 'n/a',
      'duracao' : 'n/a',
      'nivel' : {
              'br' : 'Iniciante',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
          },
         'atividade' : {
              'br' : 'Tutorial',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
         },
      'titulo' : {
              'br' : 'Python para Finanças: Primeiros Passos',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
          }
          ,
      'descricao' : {
          'br' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
          'en' : 'Em ingles',
          'es' : 'Em espanhol',
        },
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
      'nivel' : {
           'br' : 'Iniciante',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
      },
      'atividade' : {
           'br' : 'Tutorial',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
      },
      'titulo' : {
           'br' : 'Python para Finanças: Primeiros Passos',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
       },
      'descricao' : {
           'br' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
           'en' : 'Em ingles',
           'es' : 'Em espanhol',
       },
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
      'nivel' : {
           'br' : 'Iniciante',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
       },
      'atividade' : {
           'br' : 'Tutorial',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
      },
      'titulo' : {
           'br' : 'Python para Finanças: Primeiros Passos',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
       },
      'descricao' : {
           'br' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
           'en' : 'Em ingles',
           'es' : 'Em espanhol',
       },
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
      'nivel' : {
           'br' : 'Iniciante',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
       },
      'atividade' : {
           'br' : 'Tutorial',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
      },
      'titulo' : {
           'br' : 'Python para Finanças: Primeiros Passos',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
       },
      'descricao' : {
           'br' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
           'en' : 'Em ingles',
           'es' : 'Em espanhol',
       },
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
      'nivel' : {
           'br' : 'Iniciante',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
       },
      'atividade' : {
           'br' : 'Tutorial',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
      },
      'titulo' : {
           'br' : 'Python para Finanças: Primeiros Passos',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
       },
      'descricao' : {
           'br' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
           'en' : 'Em ingles',
           'es' : 'Em espanhol',
       },
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
                <h6>{data['nivel']['br']}</h6>
                <h6>{data['atividade']['br']}</h6>
              </div>
              <div className='card_palestra_infos_2'>
                <h3>{data['titulo']['br']}</h3>
                <h3>{data['descricao']['br']}</h3>
              </div>

              <div className='card_palestra_infos_3'>
                {data.palestrante.length > 1 ? (
                  <>
                  {data.palestrante.map ((data_palestrante, index_foto) => (
                      <img key={index_foto} src={data_palestrante['foto']} alt="" />
                  ))}
                  {data.palestrante.map ((data_palestrante, index_nome) => (
                      <h3 key={index_nome}>{data_palestrante['nome']}</h3>
                  ))}
                  </>
                  ) : (
                    <>
                      <h3 key={index}>{data.palestrante[0].nome}</h3>
                      <img key={index} src={data.palestrante[0].foto} alt="" />
                    </>
                  )}
              </div>
            </div>    
          ))}          
        </div>
  </div>)
}