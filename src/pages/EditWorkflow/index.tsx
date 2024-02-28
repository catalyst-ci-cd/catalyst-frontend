import Editor from '@monaco-editor/react';
import Spinner from '@/components/Spinner';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EditWorkflowHandler } from '@/services/WorkflowApi';
import { toast } from 'react-toastify';

export interface IWorflowUpdateFormInput {
  content: string;
}

const EditWorkFlow = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [workflowContent, setWorkflowContent] = useState<string>('');

  const handleEditWorkflow: React.FormEventHandler<
    HTMLFormElement
  > = async event => {
    event.preventDefault();

    if (workflowContent === '') {
      toast.error('Workflow content cannot be empty');
      return;
    }

    const response = await EditWorkflowHandler(
      {
        content: workflowContent,
      },
      id!,
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
        className="container flex gap-8 items-center justify-between flex-col py-8 sm:flex-row min-h-screen"
        onSubmit={handleEditWorkflow}
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
          <button className="bg-white text-primary p-2 rounded-md hover:bg-primary hover:text-white  transition-all duration-300 ease-in-out hover:border-accent border-2 border-primary w-full whitespace-nowrap ">
            Update Workflow
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditWorkFlow;
