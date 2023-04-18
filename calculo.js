 //Variaveis =>

/*  DENTES RETOS  */
let D1_dentes = document.getElementById('d1_dentes'),
D2_dentes = document.getElementById('d2_dentes'),
N1_dentes = document.getElementById('n1_dentes'),
N2_dentes = document.getElementById('n2_dentes'),
angulo_dentes = document.getElementById('angulo_dentes'),
modulo_dentes = document.getElementById('modulo_dentes');

/*  CONICA  */ 
let N1_conica = document.getElementById("n1_conica"),
N2_conica = document.getElementById("n2_conica"),
D1_conica = document.getElementById("d1_conica"),
D2_conica = document.getElementById("d2_conica"),
modulo_conica = document.getElementById("modulo_conica");

/*   Sem Fim   */ 
let modulo_semfim = document.getElementById("M"),
AngBeta_semfim = document.getElementById("beta"),
AngTeta_semfim = document.getElementById("teta"),
D2_semfim = document.getElementById("D2"),
N1_semfim = document.getElementById("N1"),
N2_semfim = document.getElementById("N2");

let resultado_dentes = document.getElementById("resultadoDentes")
let resultado_conica = document.getElementById("resultadoConica")
let reusltado_semfim = document.getElementById("resultadoSemfim")

//Mensagem de prencher os campos
function mensagem(){
alert('Preencha todos os campo 🔴')
}

let statusDentes = document.getElementById("statusDentes")
let statusConica = document.getElementById("statusConica")
let statusSemfim = document.getElementById("statusSemfim")

//botão de fechar
function fechar(){
statusDentes.style.display = "none"
statusConica.style.display = "none"
statusSemfim.style.display = "none"
}

//Calculos
function calculoDentes(){

if((N1_dentes.value != "") && (N2_dentes.value != "") && (D1_dentes.value != "") && (D2_dentes.value != "") && (modulo_dentes.value != "") && (angulo_dentes.value != "")){

  const diametroExternoCoroa =  (modulo_dentes.value * (Number(N1_dentes.value) + 2)).toFixed(2)
  const diametroExternoPinhao = (modulo_dentes.value * (Number(N2_dentes.value) + 2)).toFixed(2)

  const diametroPrimitivoCoroa = (modulo_dentes.value * N1_dentes.value).toFixed(2)
  const diametroPrimitivoPinhao = (modulo_dentes.value * N2_dentes.value).toFixed(2) 

  const diametroInternoCoroa = (diametroExternoCoroa - (2 * (2.16 * modulo_dentes.value))).toFixed(2)
  const diametroInternoPinhao = (diametroExternoPinhao - (2 * (2.16 * modulo_dentes.value))).toFixed(2) 

  const deg = Math.cos(angulo_dentes.value * (Math.PI / 180))
  const diametroBaseCoroa = (diametroPrimitivoCoroa * deg).toFixed(2)
  const diametroBasePinhao = (diametroPrimitivoPinhao * deg).toFixed(2) 

  const comprimentoDiametroCuboCoroa = (2 * D1_dentes.value).toFixed(2)
  const comprimentoDiametroCuboPinhao = (2 * D2_dentes.value).toFixed(2)

  const folgaDente = (0.16 * modulo_dentes.value).toFixed(2)

  const distanciaCentros = ((modulo_dentes.value * (Number(N1_dentes.value) + Number(N2_dentes.value))) / 2).toFixed(2)

  const passo = (modulo_dentes.value * Math.PI).toFixed(2)

  const reforco = (passo/2).toFixed(2)

  const comprimentoDente = (8 * modulo_dentes.value).toFixed(2)

  const corpoRoda = (comprimentoDente * 0.6).toFixed(2)

  const alturaDente = (2.16 * modulo_dentes.value).toFixed(2)

  const espessura = (passo / 2).toFixed(2)
    
    
    resultado_dentes.innerHTML = `
        <table>
                <tbody>
                    <tr>
                        <td>FORMULAS</td>
                        <td>COROA</td>
                        <td>PINHÃO</td>
                    </tr>
                    <tr>
                        <td>Diametro externo :</td>
                        <td > ${diametroExternoCoroa} mm </td>
                        <td > ${diametroExternoPinhao} mm </td>
                    </tr>
                    <tr>
                        <td>Diametro primitivo :</td>
                        <td > ${diametroPrimitivoCoroa} mm </td>
                        <td > ${diametroPrimitivoPinhao} mm </td>
                    </tr>
                    <tr>
                        <td>Diametro de base :</td>
                        <td > ${diametroBaseCoroa} mm </td>
                        <td > ${diametroBasePinhao} mm </td>
                    </tr>
                    <tr>
                        <td>Diametro interno :</td>
                        <td > ${diametroInternoCoroa} mm </td>
                        <td > ${diametroInternoPinhao} mm </td>
                    </tr>
                    <tr>
                        <td>Diametro do cubo :</td>
                        <td > ${comprimentoDiametroCuboCoroa} mm </td>
                        <td > ${comprimentoDiametroCuboPinhao} mm </td>
                    </tr>
                    <tr>
                        <td>Comprimento do cubo :</td>
                        <td > ${comprimentoDiametroCuboCoroa} mm </td>
                        <td > ${comprimentoDiametroCuboPinhao} mm </td>
                    </tr>
                    <tr>
                        <td><hr></td>
                        <td><hr></td>
                        <td><hr></td>
                    </tr>
                    <tr>
                        <td>Passo :</td>
                        <td > ${passo} mm </td>
                    </tr>
                    <tr>
                        <td>Folga no pé do dente :</td>
                        <td > ${folgaDente} mm </td>
                    </tr>
                    <tr>
                        <td>Altura do dente:</td>
                        <td > ${alturaDente} mm </td>
                    </tr>
                    <tr>
                        <td>Reforço (G) :</td>
                        <td > ${reforco} mm </td>
                    </tr>
                    <tr>
                        <td>Comprimento do Dente :</td>
                        <td > ${comprimentoDente} mm </td>
                    </tr>
                    <tr>
                        <td>Corpo da Roda :</td>
                        <td > ${corpoRoda} mm </td>
                    </tr>
                    <tr>
                        <td>Distancia entre Centros :</td>
                        <td > ${distanciaCentros} mm </td>
                    </tr>
                    <tr>
                        <td>Espessura :</td> 
                        <td > ${espessura} mm </td>
                    </tr>
                </tbody>
            </table>
    `

    console.log(diametroExternoCoroa);

    statusDentes.style.display = 'inline-block'
        
}else{
    mensagem()
}
}

function calculoConica(){

if((N1_conica.value != "") && (N2_conica.value != "") && (D1_conica.value != "") && (D2_conica.value != "") && (modulo_conica.value != "")) {

const divisao = parseInt(N1_conica.value) / parseInt(N2_conica.value)
// const rad = Math.atan(divisao)
const deg = Math.atan(divisao) * (180 / Math.PI)
const angB = deg.toFixed(2)

const diametroPrimitivoCoroa = (N1_conica.value * modulo_conica.value).toFixed(2)
const diametroPrimitivoPinhao = (N2_conica.value * modulo_conica.value).toFixed(2)

const diametroExternoCoroa = (parseInt(diametroPrimitivoCoroa) + 2 * modulo_conica.value * Math.cos(angB * (Math.PI / 180))).toFixed(2)
const diametroExternoPinhao = (parseInt(diametroPrimitivoPinhao) + 2 * modulo_conica.value * Math.cos(angB * (Math.PI / 180))).toFixed(2)

const diametroCuboCoroa = (2 * D1_conica.value).toFixed(2)
const diametroCuboPinhao = (2 * D2_conica.value).toFixed(2)

const comprimentoCuboCoroa = (1.5 * D1_conica.value).toFixed(2)
const comprimentoCuboPinhao = (1.5 * D2_conica.value).toFixed(2)

const gCoroa = ((diametroPrimitivoCoroa / 2) * Math.sin(angB * (Math.PI / 180))).toFixed(2)
const gPinhao = ((diametroPrimitivoPinhao / 2) * Math.sin(angB * (Math.PI / 180))).toFixed(2)

const tgY1 = (modulo_conica.value / gCoroa).toFixed(2)
const Y1 = Math.atan(tgY1) * (180 / Math.PI)
const angYCoroa = Y1.toFixed(2)

const tgY2 = (modulo_conica.value / gPinhao).toFixed(2)
const Y2 = Math.atan(tgY2) * (180 / Math.PI)
const angYPinhao = Y2.toFixed(2)

const aCoroa = (parseInt(angYCoroa) + parseInt(angB)).toFixed(2)
const aPinhao = (parseInt(angYPinhao) + parseInt(angB)).toFixed(2)

const lCoroa = (gCoroa / 3).toFixed(2)
const lPinhao = (gPinhao / 3).toFixed(2)

const chavetaA = (0.25 * D1_conica.value).toFixed(2)
const chavetaB = (0.25 * D2_conica.value).toFixed(2)

const tgZ1 = (7 * modulo_conica.value) / (6 * gCoroa)
const Z1 = Math.atan(tgZ1) * (180 / Math.PI)
const angZ = Z1.toFixed(2)

const C = (parseInt(angB) - parseInt(angZ)).toFixed(2)

const D = (90 - angB).toFixed(2)

const H = (2.166 * modulo_conica.value).toFixed(2)

const F = (0.167 * modulo_conica.value).toFixed(2)

const W = (2.166 * modulo_conica.value * 1.25).toFixed(2)

const E = (1.57 * modulo_conica.value).toFixed(2)


resultado_conica.innerHTML = `
    <table>
            <tbody>
                <tr>
                    <td>FORMULAS</td>
                    <td>COROA</td>
                    <td>PINHÂO</td>
                </tr>
    
                <tr>
                    <td> Diametro Primitivo </td>
                    <td > ${diametroPrimitivoCoroa} mm </td>
                    <td > ${diametroPrimitivoPinhao} mm </td>
                </tr>
    
                <tr>
                    <td> Diametro Externo </td>
                    <td > ${diametroExternoCoroa} mm </td>
                    <td > ${diametroExternoPinhao} mm </td>
                </tr>
                <tr>
                    <td> Diametro do Cubo </td>
                    <td > ${diametroCuboCoroa} mm </td>
                    <td > ${diametroCuboPinhao} mm </td>
                </tr>
                <tr>
                    <td> Comprimento do Cubo </td>
                    <td > ${comprimentoCuboCoroa} mm </td>
                    <td > ${comprimentoCuboPinhao} mm </td>
                </tr>
                 <tr>
                    <td> Geratriz (G)</td>
                    <td > ${gCoroa} mm </td>
                    <td > ${gPinhao} mm </td>
                </tr>
                <tr>
                    <td> Comp. do Dente (L) </td>
                    <td > ${lCoroa} mm </td>
                    <td > ${lPinhao} mm </td>
                </tr>
                <tr>
                    <td> Y </td>
                    <td > ${angYCoroa} ° </td>
                    <td > ${angYPinhao} ° </td>
                </tr>
                    
                <tr>
                    <td> A </td>
                    <td > ${aCoroa} ° </td>
                    <td > ${aPinhao} ° </td>
                </tr>
                <tr>
                    <td> Chaveta a </td>
                    <td > ${chavetaA} mm </td>
                    <td > ${chavetaB} mm </td>
                </tr>
                <tr>
                    <td> Chaveta b </td>
                    <td > ${chavetaA} mm </td>
                    <td > ${chavetaB} mm </td>
                </tr>
                <tr>
                <td><hr></td>
                <td ><hr></td>
                <td ><hr></td>
                </tr>
                <tr>
                    <td> B </td>
                    <td > ${angB} ° </td>
                </tr>
    
                <tr>
                    <td> Z </td>
                    <td > ${angZ} ° </td>
                </tr>
    
                <tr>
                    <td> C </td>
                    <td > ${C} ° </td>
                </tr>
    
                <tr>
                    <td> D </td>
                    <td > ${D} ° </td>
                </tr>
    
                <tr>
                    <td> H </td>
                    <td > ${H} mm </td>
                </tr>
    
                <tr>
                    <td> F </td>
                    <td > ${F} mm </td>
                </tr>
    
                <tr>
                    <td> W </td>
                    <td > ${W} mm </td>
                </tr>
    
                <tr>
                    <td> E </td>
                    <td > ${E} mm </td>
                </tr>
            </tbody>
        </table>
`

statusConica.style.display = "inline-block"

}else{
mensagem()

}
}

function calculoSemfim(){

if((N1_semfim.value != "") && (D2_semfim.value != "") && (N2_semfim.value != "") && (AngTeta_semfim.value != "") && (AngBeta_semfim.value != "") && (modulo_semfim.value != "")){


const moduloCircuferencialCoroa = (modulo_semfim.value / Math.cos(AngBeta_semfim.value * (Math.PI / 180))).toFixed(2)
const moduloCircuferencialPinhao = (modulo_semfim.value / Math.sin(AngBeta_semfim.value * (Math.PI / 180))).toFixed(2)

const diametroPrimitivoCoroa = (moduloCircuferencialCoroa * N1_semfim.value).toFixed(2)
const diametroPrimitivoPinhao = (moduloCircuferencialPinhao * N2_semfim.value).toFixed(2)

const diametroExternoCoroa = ((modulo_semfim.value / Math.sin(AngBeta_semfim.value * (Math.PI / 180))) * N1_semfim.value + 2 * modulo_semfim.value).toFixed(2)
const diametroExternoPinhao =  (parseInt(diametroPrimitivoPinhao) + 2 * modulo_semfim.value).toFixed(2)

const diametroInternoCoroa = (diametroPrimitivoCoroa - modulo_semfim.value * 2.334).toFixed(2)
const diametroInternoPinhao = (diametroPrimitivoPinhao - 2.334 * modulo_semfim.value).toFixed(2)

const moduloAxialCoroa = (modulo_semfim.value / Math.cos(AngBeta_semfim.value * (Math.PI / 180))).toFixed(2)
const moduloAxialPinhao = (modulo_semfim.value / Math.sin(AngBeta_semfim.value * (Math.PI / 180))).toFixed(2)

const passoCircuferencialCoroa = (moduloCircuferencialCoroa * Math.PI).toFixed(2)
const passoCircuferencialPinhao = ((moduloCircuferencialPinhao * (Math.PI / 180)) *Math.PI).toFixed(2)

//(L1)
const comprimentoRoscaParafuso = (2 * moduloAxialCoroa * (1 + Math.sqrt(N2_semfim.value))).toFixed(2)
//(L2)
const larguraCoroa = (8 * modulo_semfim.value).toFixed(2)
//(L3)
const espessuraCorpoEngrenagem = (8 * modulo_semfim.value * 0.6).toFixed(2)



const passoNormalCoroa = (modulo_semfim.value * Math.PI).toFixed(2)

const passoHelicePinhao = ((modulo_semfim.value / Math.cos(AngBeta_semfim.value * (Math.PI / 180))) * Math.PI * N1_semfim.value).toFixed(2)

const passoAxialPinhao = ((modulo_semfim.value / Math.cos(AngBeta_semfim.value * (Math.PI / 180))) * Math.PI).toFixed(2)

const alturaCabeca = modulo_semfim.value

const alturaPe = (1.167 * modulo_semfim.value).toFixed(2)

const alturaTotal = (parseInt(modulo_semfim.value) + 1.167 * modulo_semfim.value).toFixed(2)

const folgaPe = (0.167 * modulo_semfim.value).toFixed(2)

const espessuraPinhao = ((modulo_semfim.value * Math.PI) / 2).toFixed(2)

const diametroCuboCoroa = ((D2_semfim.value - 5) * 2).toFixed(2)

const comprimentoCubo = (D2_semfim.value * 1.5).toFixed(2)

const diametroBaseCoroa = (diametroPrimitivoPinhao * Math.cos(AngTeta_semfim.value * (Math.PI / 180))).toFixed(2)

const diametroExternoMaximo = (parseInt(diametroPrimitivoPinhao) + 3 * modulo_semfim.value).toFixed(2)

const distanciaCentros = ((moduloCircuferencialCoroa * N1_semfim.value + moduloCircuferencialPinhao * N2_semfim.value) / 2).toFixed(2)

const raioExternoGarganta = (distanciaCentros - diametroInternoPinhao / 2).toFixed(2)

const raioInternoGarganta = (distanciaCentros - diametroExternoPinhao / 2).toFixed(2)

const comprimentoFundo = (6.5 * modulo_semfim.value).toFixed(2)

const reforcoDente = ((modulo_semfim.value * Math.PI) / 2).toFixed(2)

const larguraChaveta = (D2_semfim.value / 4).toFixed(2)

const profundidadeChaveta = (D2_semfim.value / 4 / 2).toFixed(2)

reusltado_semfim.innerHTML = `
    <div class="tableFlex">  
            <table>
                <tbody>
                    <tr>
                        <td>FORMULAS</td>
                        <td>COROA</td>
                        <td>PARAFUSO</td>
                    </tr>
                    
                    <tr>
                        <td> Modulo Axial </td>
                        <td > ${moduloAxialCoroa} mm </td>
                        <td > ${moduloAxialPinhao} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Modulo circunferencial </td>
                        <td > ${moduloCircuferencialCoroa} mm </td>
                        <td > ${moduloCircuferencialPinhao} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Diametro Primitivo </td>
                        <td > ${diametroPrimitivoCoroa} mm </td>
                        <td > ${diametroPrimitivoPinhao} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Diametro Externo </td>
                        <td > ${diametroExternoCoroa} mm </td>
                        <td > ${diametroExternoPinhao} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Diametro Base </td>
                        <td > ${diametroBaseCoroa} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Diametro Interno </td>
                        <td > ${diametroInternoCoroa} mm </td>
                        <td > ${diametroInternoPinhao} mm </td>
                    </tr>
                    <tr>
                        <td> Passo Normal </td>
                        <td > ${passoNormalCoroa}  mm </td>
                    </tr>
                    <tr>
                        <td> Passo Axial </td>
                        <td > ${passoAxialPinhao} mm </td>
                    </tr>
                    <tr>
                        <td> Passo Circuferencial </td>
                        <td > ${passoCircuferencialCoroa} mm </td>
                        <td > ${passoCircuferencialPinhao} mm </td>
                    </tr>                
                    <tr>
                        <td> Passo Helice </td>
                        <td > ${passoHelicePinhao} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Altura da Cabeça do dente </td>
                        <td > ${alturaCabeca} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Comp. Rosca (L1) </td>
                        <td > ${comprimentoRoscaParafuso} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Altura da Cabeça </td>
                        <td > ${alturaCabeca} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Altura do Pè </td>
                        <td > ${alturaPe} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Altura Total </td>
                        <td > ${alturaTotal} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Folga do Pé </td>
                        <td > ${folgaPe} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Espessura do Dente </td>
                        <td > ${espessuraPinhao} mm </td>
                    </tr>
                </tbody>
            </table>
            
            <table>
                <tbody>
                    <tr>
                        <td>FORMULAS</td>
                        <td>PARAFUSO</td>
                    </tr>
                    
                    <tr>
                        <td> Diametro Externo Maximo </td>
                        <td > ${diametroExternoMaximo} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Diamtro Cubo </td>
                        <td > ${diametroCuboCoroa} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Comp. Cubo </td>
                        <td > ${comprimentoCubo} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Largura Coroa (L2) </td>
                        <td > ${larguraCoroa} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Espessura Corpo (L3) </td>
                        <td > ${espessuraCorpoEngrenagem} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Raio Externo Garganta </td>
                        <td > ${raioExternoGarganta} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Raio Interno Garganta </td>
                        <td > ${raioInternoGarganta} mm </td>
                    </tr>
                                        
                    <tr>
                        <td> Comp. do Fundo </td>
                        <td > ${comprimentoFundo} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Reforço do Dente </td>
                        <td > ${reforcoDente} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Distancia entre Centros </td>
                        <td > ${distanciaCentros}  mm </td>
                    </tr>
                    
                    <tr>
                        <td> Largura Chaveta </td>
                        <td > ${larguraChaveta} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Profundiade Chaveta </td>
                        <td > ${profundidadeChaveta} mm </td>
                    </tr>
                </tbody>
            </table>
        </div>
`

statusSemfim.style.display = "inline-block"

}else{
mensagem()
}
}