import useAxios from '../../hooks/useAxios'
import useForm from '../../hooks/useForm'

import PollFormTitle from './PollFormTitle/PollFormTitle.component'
import PollFormBody from './PollFormBody/PollFormBody.component'
import PollFormFooter from './PollFormFooter/PollFormFooter.component'
import OptionsList from '../OptionsList/OptionsList.component'
import Notices from '../Notices/Notices.component'
import Label from '../shared/Label/Label.component'
import Input from '../shared/Input/Input.component'
import Button from '../shared/Button/Button.component'

import styles from './PollForm.module.css'

const PollForm = () => {
  const { response, loading, error, sendData } = useAxios({ method: 'POST' })
  const { values, errors, options, handleChange, handleAddOption, handleDeleteOption, handleSubmit } = useForm(() => {
    sendData({ data: { question: values.question, options: options.map((opt) => opt.name) }, method: 'POST' })
  })

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <PollFormTitle>
          <h1 className={styles.title}>Create Your Poll</h1>
        </PollFormTitle>
        <PollFormBody>
          <div className={styles.fieldGroup}>
            <Label label="Poll Question" htmlFor="poll-question" />
            <Input
              id="poll-question"
              name="question"
              value={values.question || ''}
              placeholder="Ex: What should we have for lunch tomorrow?"
              onChange={handleChange}
            />
          </div>
          <div className={styles.fieldGroup}>
            <Label label="Poll Options" htmlFor="poll-options" />
            <div className={styles.optionGroup}>
              <Input
                id="poll-options"
                name="option"
                value={values.option || ''}
                onChange={handleChange}
                placeholder="Ex: Pizza"
              />
              <Button variant="rounded" type="button" onClick={handleAddOption}>
                &#43;
              </Button>
            </div>
          </div>
          <OptionsList list={options} handleDeleteListItem={handleDeleteOption} />
          <Notices validationErrors={errors} error={Boolean(error)} success={response?.status === 201} />
        </PollFormBody>
        <PollFormFooter>
          <Button variant={loading ? 'disabled' : 'primary'} className={styles.submitBtn} disabled={loading}>
            {loading ? 'Loading...' : 'Submit'}
          </Button>
        </PollFormFooter>
      </form>
    </div>
  )
}

export default PollForm
