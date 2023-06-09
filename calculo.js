 //Variaveis =>

/*  DENTES RETOS  */
let D1_dentes = document.getElementById('d1_dentes'),
D2_dentes = document.getElementById('d2_dentes'),
N1_dentes = document.getElementById('n1_dentes'),
N2_dentes = document.getElementById('n2_dentes'),
angulo_dentes = document.getElementById('angulo_dentes'),
modulo_dentes = document.getElementById('modulo_dentes'),
escala_dentes = document.getElementById('escala_dentes');

/*  CONICA  */ 
let N1_conica = document.getElementById("n1_conica"),
N2_conica = document.getElementById("n2_conica"),
D1_conica = document.getElementById("d1_conica"),
D2_conica = document.getElementById("d2_conica"),
modulo_conica = document.getElementById("modulo_conica"),
escala_conica = document.getElementById('escala_conica');

/*   Sem Fim   */ 
let modulo_semfim = document.getElementById("M"),
AngBeta_semfim = document.getElementById("beta"),
AngTeta_semfim = document.getElementById("teta"),
D2_semfim = document.getElementById("D2"),
N1_semfim = document.getElementById("N1"),
N2_semfim = document.getElementById("N2"),
escala_semfim = document.getElementById('escala_semfim');

let resultado_dentes = document.getElementById("resultadoDentes")
let resultado_conica = document.getElementById("resultadoConica")
let reusltado_semfim = document.getElementById("resultadoSemfim")

//Mensagem de prencher os campos
function mensagem(){
alert('🔴 Preencha todos os campos 🔴')
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

if((N1_dentes.value != "") && (N2_dentes.value != "") && (D1_dentes.value != "") && (D2_dentes.value != "") && (modulo_dentes.value != "")
 && (escala_dentes != "") ){

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

  const reforco = (passo / 2).toFixed(2)

  const comprimentoDente = (8 * modulo_dentes.value).toFixed(2)

  const corpoRoda = (comprimentoDente * 0.6).toFixed(2)

  const alturaDente = (2.16 * modulo_dentes.value).toFixed(2)

  const alturachavetaCoroa = (5 + (D1_dentes.value / 5)).toFixed(2)
  const alturachavetaPinhao = (5 + (D2_dentes.value / 5)).toFixed(2)

  const largurachavetaCoroa = (alturachavetaCoroa / 2).toFixed(2)
  const largurachavetaPinhao = (alturachavetaPinhao / 2).toFixed(2)
    
    
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
                        <td > ${diametroExternoCoroa * escala_dentes.value} mm </td>
                        <td > ${diametroExternoPinhao * escala_dentes.value} mm </td>
                    </tr>
                    <tr>
                        <td>Diametro primitivo :</td>
                        <td > ${diametroPrimitivoCoroa * escala_dentes.value} mm </td>
                        <td > ${diametroPrimitivoPinhao * escala_dentes.value} mm </td>
                    </tr>
                    <tr>
                        <td>Diametro de base :</td>
                        <td > ${diametroBaseCoroa * escala_dentes.value} mm </td>
                        <td > ${diametroBasePinhao * escala_dentes.value} mm </td>
                    </tr>
                    <tr>
                        <td>Diametro interno :</td>
                        <td > ${diametroInternoCoroa * escala_dentes.value} mm </td>
                        <td > ${diametroInternoPinhao * escala_dentes.value} mm </td>
                    </tr>
                    <tr>
                        <td>Diametro do cubo :</td>
                        <td > ${comprimentoDiametroCuboCoroa * escala_dentes.value} mm </td>
                        <td > ${comprimentoDiametroCuboPinhao * escala_dentes.value} mm </td>
                    </tr>
                    <tr>
                        <td>Comprimento do cubo :</td>
                        <td > ${comprimentoDiametroCuboCoroa * escala_dentes.value} mm </td>
                        <td > ${comprimentoDiametroCuboPinhao * escala_dentes.value} mm </td>
                    </tr>
                    <tr>
                        <td>Altura Chaveta :</td>
                        <td > ${alturachavetaCoroa * escala_dentes.value} mm </td>
                        <td > ${alturachavetaPinhao * escala_dentes.value} mm </td>
                    </tr>
                    <tr>
                        <td>Largura Chaveta :</td>
                        <td > ${largurachavetaCoroa * escala_dentes.value} mm </td>
                        <td > ${largurachavetaPinhao * escala_dentes.value} mm </td>
                    </tr>
                    <tr>
                        <td><hr></td>
                        <td><hr></td>
                        <td><hr></td>
                    </tr>
                    <tr>
                        <td>Passo :</td>
                        <td > ${passo * escala_dentes.value} mm </td>
                    </tr>
                    <tr>
                        <td>Folga no pé do dente :</td>
                        <td > ${folgaDente * escala_dentes.value} mm </td>
                    </tr>
                    <tr>
                        <td>Altura do dente:</td>
                        <td > ${alturaDente * escala_dentes.value} mm </td>
                    </tr>
                    <tr>
                        <td>Reforço (G) :</td>
                        <td > ${reforco * escala_dentes.value} mm </td>
                    </tr>
                    <tr>
                        <td>Comprimento do Dente :</td>
                        <td > ${comprimentoDente * escala_dentes.value} mm </td>
                    </tr>
                    <tr>
                        <td>Corpo da Roda :</td>
                        <td > ${corpoRoda * escala_dentes.value} mm </td>
                    </tr>
                    <tr>
                        <td>Distancia entre Centros :</td>
                        <td > ${distanciaCentros * escala_dentes.value} mm </td>
                    </tr>
                    <tr>
                        <td>Espessura :</td> 
                        <td > ${reforco * escala_dentes.value} mm </td>
                    </tr>
                </tbody>
            </table>
    `

    statusDentes.style.display = 'inline-block'
        
}else{
    mensagem()
}
}

function calculoConica(){

if((N1_conica.value != "") && (N2_conica.value != "") && (D1_conica.value != "") && (D2_conica.value != "") && (modulo_conica.value != "")
&& (escala_conica.value != "")) {

const divisao1 = parseInt(N1_conica.value) / parseInt(N2_conica.value)
// const rad = Math.atan(divisao)
const deg1 = Math.atan(divisao1) * (180 / Math.PI)
const angB = deg1.toFixed(2)

const divisao2 = parseInt(N2_conica.value) / parseInt(N1_conica.value)
const deg2 = Math.atan(divisao2) * (180 / Math.PI)
const angb = deg2.toFixed(2)


const diametroPrimitivoCoroa = (N1_conica.value * modulo_conica.value).toFixed(2)
const diametroPrimitivoPinhao = (N2_conica.value * modulo_conica.value).toFixed(2)

const diametroExternoCoroa = (parseInt(diametroPrimitivoCoroa) + 2 * modulo_conica.value * Math.cos(angB * (Math.PI / 180))).toFixed(2)
const diametroExternoPinhao = (parseInt(diametroPrimitivoPinhao) + 2 * modulo_conica.value * Math.cos(angB * (Math.PI / 180))).toFixed(2)

const diametroInternoCoroa = (modulo_conica.value * (N1_conica.value -(2.33 * Math.cos(angB * (Math.PI / 180))))).toFixed(2)
const diametroInternoPinhao = (modulo_conica.value * (N2_conica.value -(2.33 * Math.cos(angB * (Math.PI / 180))))).toFixed(2)

const diametroCuboCoroa = (2 * D1_conica.value).toFixed(2)
const diametroCuboPinhao = (2 * D2_conica.value).toFixed(2)

const comprimentoCuboCoroa = (1.5 * D1_conica.value).toFixed(2)
const comprimentoCuboPinhao = (1.5 * D2_conica.value).toFixed(2)

const gCoroa = (diametroPrimitivoCoroa / (2 * Math.sin(angB * (Math.PI / 180)))).toFixed(2)

const tgY1 = (modulo_conica.value / gCoroa)
const Y1 = Math.atan(tgY1) * (180 / Math.PI)
const angYCoroa = Y1.toFixed(2)

const aCoroa = (parseFloat(angB) + parseFloat(angYCoroa)).toFixed(2)
const aPinhao = (parseFloat(angb) + parseFloat(angYCoroa)).toFixed(2)

const lCoroa = (gCoroa / 3).toFixed(2)

const chavetaBCoroa = (0.25 * D1_conica.value).toFixed(2)
const chavetaBPinhao = (0.25 * D2_conica.value).toFixed(2)

const chavetaACoroa = (0.5 * chavetaBCoroa).toFixed(2)
const chavetaAPinhao = (0.5 * chavetaBPinhao).toFixed(2)

const tgZ1 = (7 * modulo_conica.value) / (6 * gCoroa)
const Z1 = Math.atan(tgZ1) * (180 / Math.PI)
const angZ = Z1.toFixed(2)

const C = (parseFloat(angB) - parseFloat(angZ)).toFixed(2)
const c = (parseFloat(angb) - parseFloat(angZ)).toFixed(2)

const D = (90 - parseFloat(angB)).toFixed(2)
const d = (90 - parseFloat(angb)).toFixed(2)

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
                    <td> Diametro Externo </td>
                    <td > ${diametroExternoCoroa * escala_conica.value} mm </td>
                    <td > ${diametroExternoPinhao * escala_conica.value} mm </td>
                </tr>    
                <tr>
                    <td> Diametro Primitivo </td>
                    <td > ${diametroPrimitivoCoroa * escala_conica.value} mm </td>
                    <td > ${diametroPrimitivoPinhao * escala_conica.value} mm </td>
                </tr>
    
                <tr>
                    <td> Diametro Interno </td>
                    <td > ${diametroInternoCoroa * escala_conica.value} mm </td>
                    <td > ${diametroInternoPinhao * escala_conica.value} mm </td>
                </tr>
                <tr>
                    <td> Diametro do Cubo </td>
                    <td > ${diametroCuboCoroa * escala_conica.value} mm </td>
                    <td > ${diametroCuboPinhao * escala_conica.value} mm </td>
                </tr>
                <tr>
                    <td> Comprimento do Cubo </td>
                    <td > ${comprimentoCuboCoroa * escala_conica.value} mm </td>
                    <td > ${comprimentoCuboPinhao * escala_conica.value} mm </td>
                </tr>
                <tr>
                <td> Ang. Cone Externo (A) </td>
                <td > ${aCoroa * escala_conica.value} ° </td>
                <td > ${aPinhao * escala_conica.value} ° </td>
            </tr>
            <tr>
                <td> Ang. Cone Primitivo (B) </td>
                <td > ${angB * escala_conica.value} ° </td>
                <td > ${angb * escala_conica.value} ° </td>
            </tr>
 
            <tr>
                <td> Ang. Cone Interno (C) </td>
                <td > ${C * escala_conica.value} ° </td>
                <td > ${c * escala_conica.value} ° </td>
            </tr>

            <tr>
                <td> Ang. Cone Posterior (D) </td>
                <td > ${D * escala_conica.value} ° </td>
                <td > ${d * escala_conica.value} ° </td>
            </tr>
            <tr>
            <td> Chaveta b </td>
            <td > ${chavetaBCoroa * escala_conica.value} mm </td>
            <td > ${chavetaBPinhao * escala_conica.value} mm </td>
        </tr>
            <tr>
            <td> Chaveta a </td>
            <td > ${chavetaACoroa * escala_conica.value} mm </td>
            <td > ${chavetaAPinhao * escala_conica.value} mm </td>
        </tr>
                <tr>
                <td><hr></td>
                <td ><hr></td>
                <td ><hr></td>
                </tr>
                <tr>
                <td> Geratriz (G)</td>
                <td > ${gCoroa * escala_conica.value} mm </td>
            </tr>
            <tr>
                <td> Comp. do Dente (L) </td>
                <td > ${lCoroa * escala_conica.value} mm </td>
            </tr>
            <tr>
                <td> Profundidade do Rasgo (W) </td>
                <td > ${W * escala_conica.value} mm </td>
            </tr>  
            <tr>
            <td> Ang. Pé do Dente (Z) </td>
            <td > ${angZ * escala_conica.value} ° </td>
        </tr>
        <tr>
            <td> Ang Cabeça do Dente (Y) </td>
            <td > ${angYCoroa * escala_conica.value} ° </td>
        </tr>

            <tr>
                <td> Altura do Dente (H) </td>
                <td > ${H * escala_conica.value} mm </td>
            </tr>

            <tr>
                <td> Folga do Pé do Dente (F) </td>
                <td > ${F * escala_conica.value} mm </td>
            </tr>
    
            <tr>
                <td> Espessura do Dente (E) </td>
                <td > ${E * escala_conica.value} mm </td>
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

if((N1_semfim.value != "") && (D2_semfim.value != "") && (N2_semfim.value != "") && (AngTeta_semfim.value != "") && (AngBeta_semfim.value != "") 
&& (modulo_semfim.value != "") && (escala_semfim.value != "")){

// Ninguém nunca vai saber o trabalho do caralho que deu pra concertar/fazer essa merda   -FelipSenna

// Pra voce querido colega programador que decidiu inspecionar essa bomba que eu chamo de codigo, so saiba que fazer todas essas 
// formulas e fazer tudo isso funcionar me custou arduos 4 meses e eu espero que isso possa te ajudar no que estiver fazendo 

const map = (modulo_semfim.value / Math.cos(AngBeta_semfim.value * (Math.PI / 180))).toFixed(2)
const mcp = (modulo_semfim.value / Math.sin(AngBeta_semfim.value * (Math.PI / 180))).toFixed(2)

// map = mcc  e   mcp  = mac   

const pn = (modulo_semfim.value * Math.PI).toFixed(2)

const pap = (map * Math.PI).toFixed(2)

const pcp = (mcp * Math.PI).toFixed(2)
const pcc = (map * Math.PI).toFixed(2)

const php = (pap * N1_semfim.value).toFixed(2)

const dpp = (mcp * N1_semfim.value).toFixed(2)
const dpc = (map * N2_semfim.value).toFixed(2)

const dep = (parseFloat(dpp) + (2 * modulo_semfim.value)).toFixed(2)
const dec = (parseFloat(dpc) + (2 * modulo_semfim.value)).toFixed(2)

const dip = (dpp - (2.334 * modulo_semfim.value)).toFixed(2)
const dic = (dpc - (2.334 * modulo_semfim.value)).toFixed(2)

// ap e ac = modulo

const bp = (1.167 * modulo_semfim.value).toFixed(2)
// bp = bc

const hp = (Number(modulo_semfim.value) + Number(bp)).toFixed(2)
// hp = hc

const ep = (0.167 * modulo_semfim.value).toFixed(2)
// ep = ec

const eep = (pn / 2).toFixed(2)
// eep = g

const l1 = (2 * map * (1 + Math.sqrt(N2_semfim.value))).toFixed(2)

const l2 = (8 * modulo_semfim.value).toFixed(2)

const l3 = (0.6 * l2).toFixed(2)

const db = (dpc * Math.cos(AngTeta_semfim.value * (Math.PI / 180))).toFixed(2)

const de2m = (parseFloat(dpc) + 3 * modulo_semfim.value).toFixed(2)

const k = (6.5 * modulo_semfim.value).toFixed(2)

const i = ((Number(dpp) + Number(dpc)) / 2).toFixed(2)

const reg = (i - (dic / 2)).toFixed(2)

const rig = (i - (dec / 2)).toFixed(2)

const s = (0.25 * D2_semfim.value).toFixed(2)

const t = (0.5 * s).toFixed(2)

const dc = (2 * (D2_semfim.value - 5)).toFixed(2)

const cc = (1.5 * D2_semfim.value).toFixed(2)


reusltado_semfim.innerHTML = `
    <div class="tableFlex">  
            <table>
                <tbody>
                    <tr>
                        <td>FORMULAS</td>
                        <td>PARAFUSO</td>
                        <td>COROA</td>
                    </tr>
                    
                    <tr>
                        <td> Diametro Externo </td>
                        <td > ${dep * escala_semfim.value} mm </td>
                        <td > ${dec * escala_semfim.value} mm </td>
                    </tr>
                
                    <tr>
                        <td> Diametro Primitivo </td>
                        <td > ${dpp * escala_semfim.value} mm </td>
                        <td > ${dpc * escala_semfim.value} mm </td>
                    </tr>

                    <tr>
                        <td> Diametro Interno </td>
                        <td > ${dip * escala_semfim.value} mm </td>
                        <td > ${dic * escala_semfim.value} mm </td>
                    </tr>
                            
                    <tr>
                        <td> Modulo Axial </td>
                        <td > ${map * escala_semfim.value} mm </td>
                        <td > ${mcp * escala_semfim.value} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Modulo Circunferencial </td>
                        <td > ${mcp * escala_semfim.value} mm </td>
                        <td > ${map * escala_semfim.value} mm </td>
                    </tr>
                    
                    <tr>
                       <td> Passo Circuferencial </td>
                       <td > ${pcp * escala_semfim.value} mm </td>
                        <td > ${pcc * escala_semfim.value} mm </td>
                    </tr>  

                    <tr>
                        <td> Passo Normal </td>
                        <td > ${pn * escala_semfim.value}  mm </td>
                    </tr>
             
                    <tr>
                        <td> Passo Axial </td>
                        <td > ${pap * escala_semfim.value} mm </td>
                     </tr>
                         
                   <tr>
                        <td> Passo Helice </td>
                        <td > ${php * escala_semfim.value} mm </td>
                    </tr>
            
                    <tr>
                        <td> Altura da Cabeça</td>
                        <td > ${modulo_semfim.value * escala_semfim.value} mm </td>
                    </tr>
                            
                    <tr>
                        <td> Altura do Pè </td>
                        <td > ${bp * escala_semfim.value} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Altura Total </td>
                        <td > ${hp * escala_semfim.value} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Folga do Pé </td>
                        <td > ${ep * escala_semfim.value} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Espessura do Dente </td>
                        <td > ${eep * escala_semfim.value} mm </td>
                    </tr>

                    <tr>
                        <td> Comp. Rosca (L1) </td>
                        <td > ${l1 * escala_semfim.value} mm </td>
                    </tr>
                </tbody>
            </table>
            
            <table>
                <tbody>
                    <tr>
                        <td>FORMULAS</td>
                        <td>COROA</td>
                    </tr>
                    
                    <tr>
                        <td> Diametro Externo Maximo </td>
                        <td > ${de2m * escala_semfim.value} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Diametro Base </td>
                        <td > ${db * escala_semfim.value} mm </td>
                    </tr>
                          
                                        
                    <tr>
                        <td> Largura Coroa (L2) </td>
                        <td > ${l2 * escala_semfim.value} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Espessura Corpo (L3) </td>
                        <td > ${l3 * escala_semfim.value} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Raio Externo Garganta (Reg) </td>
                        <td > ${reg * escala_semfim.value} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Raio Interno Garganta (Rig) </td>
                        <td > ${rig * escala_semfim.value} mm </td>
                    </tr>
                                        
                    <tr>
                        <td> Comp. do Fundo (K) </td>
                        <td > ${k * escala_semfim.value} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Reforço do Dente (G) </td>
                        <td > ${eep * escala_semfim.value} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Distancia entre Centros </td>
                        <td > ${i * escala_semfim.value}  mm </td>
                    </tr>
                                       
                    <tr>
                        <td> Largura Chaveta (s) </td>
                        <td > ${s * escala_semfim.value} mm </td>
                    </tr>
                    
                    <tr>
                        <td> Profundiade Chaveta (t) </td>
                        <td > ${t * escala_semfim.value} mm </td>
                    </tr>

                    <tr>
                        <td> Diametro do Cubo </td>
                        <td > ${dc * escala_semfim.value} mm </td>
                     </tr>
                
                    <tr>
                        <td> Comprimento do Cubo </td>
                        <td > ${cc * escala_semfim.value} mm </td>
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