// Contratos : [ EntidadeFuncionalidade, EntidadeFuncionalidadeFNReturn]
interface EntidadeFuncionalidade {
  c1: number
  c2: number
}

type Action1Return = number
type EntidadeFuncionalidadeInput = EntidadeFuncionalidade | EntidadeFuncionalidadeStruct
type Test_EntidadeFuncionalidadeType = Error | void

// Contrato_Estruturador :
class EntidadeFuncionalidadeStruct {
  public readonly c1: number = 0
  public readonly c2: number = 0

  private constructor(private x: EntidadeFuncionalidade) {
    this.c1 = x.c1
    this.c2 = x.c2
  }

  // acao : das_intancias_filhas
  // gerar novas instancias
  static New(x: EntidadeFuncionalidade) {
    return new EntidadeFuncionalidadeStruct(x)
  }

  // acao: das instancias : somar
  static Action1(x: EntidadeFuncionalidadeInput): Action1Return {
    const formula = x.c1 + x.c2
    return formula
  }
}


// input: de dados sejam eles externos, hardcorde, doCodigo
const EntidadeFuncionalidadeInput_OK = EntidadeFuncionalidadeStruct.Action1({ c1: 10, c2: 10 })
const EntidadeFuncionalidadeInput_FAIL = EntidadeFuncionalidadeStruct.Action1({ c1: 20, c2: 20 })
const EntidadeFuncionalidadeInput_HARD = { c1: 10, c2: 10 }

// test :
function Test_EntidadeFuncionalidadeFN(op: Action1Return): Test_EntidadeFuncionalidadeType {
  if (op != 20) {
    throw new Error(`OPS..O TEST_FALHOU : O resultado = ${op}`)
  }
  console.log(`Ok..O TEST_PASSOU : O resultado = ${op}`)
}

// testerResult : para gerar resultados para serem usados no test
const entidadeFuncionalidade_TesterResult_OK = () => Test_EntidadeFuncionalidadeFN(EntidadeFuncionalidadeInput_OK)
const entidadeFuncionalidade_TesterResult_FAIL = () => Test_EntidadeFuncionalidadeFN(EntidadeFuncionalidadeInput_FAIL)

// runAllTests : rodar todos tests existentes
function RunAllTests() {
  entidadeFuncionalidade_TesterResult_OK()
  // resultTest_EntidadeFuncionalidade_FAIL()
}

RunAllTests()

/*
ALGORITMOS PARA ENTIDADE OU FUNCIONALIDADES

conceito a entidade seja ela: [ pessoa, funcionalidade, produto], sera no final a representacao de um objeto.

*/