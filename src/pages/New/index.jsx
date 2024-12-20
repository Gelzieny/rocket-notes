import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'

import { Container, Form } from './styles'
import { Link } from 'react-router-dom'

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <head>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </head>

          <Input placeholder="Titulo" type="text" />

          <Textarea placeholder="Observações" />

          <Section title="Links  úteis">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem isNew placeholder="Novo link" />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}
