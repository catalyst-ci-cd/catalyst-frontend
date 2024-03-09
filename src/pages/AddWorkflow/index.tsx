import Editor from '@monaco-editor/react';
import Spinner from '@/components/Spinner';
import { useState } from 'react';
import { CreateWorkflowHandler } from '@/services/WorkflowApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthContext } from '@/contexts/AuthContext';

export interface IWorflowFormInput {
  name: string;
  content: string;
}

const AddWorkFlow = () => {
  const navigate = useNavigate();
  const { token } = useAuthContext();
  const [workflowName, setWorkflowName] = useState<string>('');
  const [workflowContent, setWorkflowContent] = useState<string>('');

  const handleCreateWorkflow: React.FormEventHandler<
    HTMLFormElement
  > = async event => {
    event.preventDefault();

    if (workflowName === '') {
      toast.error('Workflow name cannot be empty');
      return;
    }

    if (workflowContent === '') {
      toast.error('Workflow content cannot be empty');
      return;
    }

    const response = await CreateWorkflowHandler(
      {
        name: workflowName,
        content: workflowContent,
      },
      token!,
    );
    if (response.status === 'success') {
      toast.success(response.data.message);
      navigate('/dashboard/workflows');
    } else {
      toast.error(response.error.message);
    }
  };

  return (
    <div className=" bg-primary">
      <form
        className="container flex gap-8 items-center justify-between flex-col sm:flex-row min-h-screen"
        onSubmit={handleCreateWorkflow}
      >
        <div className="sm:w-1/2 w-full">
          <Editor
            defaultLanguage="yaml"
            defaultValue="// write your code here"
            theme="vs-dark"
            height="100vh"
            width="100%"
            loading={<Spinner />}
            onMount={editor => {
              editor.focus();
            }}
            onChange={value => setWorkflowContent(value!)}
          />
        </div>
        <div className="flex flex-col gap-4  sm:w-1/2 w-full">
          <input
            type="text"
            name="workflow-name"
            id="workflow-name"
            placeholder="Workflow name..."
            className=" bg-transparent text-white p-2 border-b-2 border-accent outline-none focus:border-primary transition-all duration-300 ease-in-out w-full "
            value={workflowName}
            onChange={e => setWorkflowName(e.target.value)}
          />
          <button className="bg-white text-primary p-2 rounded-md hover:bg-primary hover:text-white  transition-all duration-300 ease-in-out hover:border-accent border-2 border-primary w-full whitespace-nowrap ">
            Create Workflow
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddWorkFlow;
