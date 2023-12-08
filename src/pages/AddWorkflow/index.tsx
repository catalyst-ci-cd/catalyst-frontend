import Editor from '@monaco-editor/react';
import Spinner from '@/components/Spinner';

const AddWorkFlow = () => {
  function handleEditorChange(value: string) {
    console.log('here is the current model value:', value);
  }
  return (
    <div className=" bg-primary">
      <div className="container flex gap-8 items-center justify-between flex-col py-8 sm:flex-row min-h-screen">
        <div className="sm:w-1/2 w-full">
          <Editor
            defaultLanguage="yaml"
            defaultValue="// write your code here"
            theme="vs-dark"
            height="100vh"
            width="100%"
            onChange={handleEditorChange}
            loading={<Spinner />}
          />
        </div>
        <div className="flex flex-col gap-4  sm:w-1/2 w-full">
          <input
            type="text"
            name="workflow-name"
            id="workflow-name"
            placeholder="Workflow name..."
            className=" bg-transparent  text-white p-2 border-b-2 border-accent outline-none focus:border-primary transition-all duration-300 ease-in-out w-full "
          />
          <button className="bg-white text-primary p-2 rounded-md hover:bg-primary hover:text-white  transition-all duration-300 ease-in-out hover:border-accent border-2 border-primary w-full whitespace-nowrap ">
            Save Workflow
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddWorkFlow;
