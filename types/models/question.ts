export interface Question {
  question: string
  answer: string
  explantion: string
}

export interface QuestionList {
  name: string
  title: string
  data: Question[]
}
