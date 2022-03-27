import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import Avatar from "../components/atom/Avatar";
import Box from "../components/atom/Box";
import Button from "../components/atom/Button";
import Chips from "../components/atom/Chips";
import Modal from "../components/atom/Modal";
import Text from "../components/atom/Text";
import TextField from "../components/atom/TextField";
import { AddImageIcon, PlusIcon, SearchIcon } from "../components/icons";
import Layout from "../components/Layout";
import { Reorder } from "framer-motion";
import { useCreatePoll } from "../apis/votes/create/hook";
import { useGetTags } from "../apis/tags/getAll/hook";
import { Skeleton } from "../components/atom/Skeleton";
import debounce from "lodash/debounce";

const NewPoll: NextPage = () => {
  const [tagsModal, setTagsModal] = useState(false);
  const [searchTagValue, setSearchTagValue] = useState("");
  const getTags = useGetTags({ page: 1, search: searchTagValue });
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState([
    { id: 0, title: "" },
    { id: 1, title: "" },
  ]);
  const createPoll = useCreatePoll();

  useEffect(() => {
    tagsModal && getTags.refetch();
  }, [tagsModal]);

  const onChangeSearchTag = debounce(
    (e) => {
      setSearchTagValue(e.target.value);
      setTimeout(() => getTags.refetch(), 0);
    },
    1000,
    1000,
    { leading: true, trailing: false }
  );

  const publishPoll = () => {
    createPoll.mutate({
      title,
      options: options.map(({ title }) => ({
        title,
      })),
    });
  };

  return (
    <Layout shouldNotShowNavigationBar={true}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col h-full justify-between">
        <Box className="space-y-5">
          <Box className="w-full h-32 flex flex-col space-y-2 justify-center items-center border border-dashed border-[#D5D7DA] rounded-md">
            <AddImageIcon color="#000" />
            <Text fontSize="sm" fontWeight="medium">
              Add Cover
            </Text>
          </Box>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Type ask a question"
          />
          <Reorder.Group
            axis="y"
            values={options}
            onReorder={setOptions}
            className="w-full flex flex-col space-y-2"
          >
            {options.map((option, index) => (
              <Reorder.Item key={option.id} value={option} className="flex items-center space-x-3">
                <TextField
                  placeholder={`Option ${option.id + 1}`}
                  onChange={(e) => {
                    options[index].title = e.target.value;
                    setOptions(options);
                  }}
                />
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.141" cy="2.76033" r="1.80855" fill="#C0C5CB" />
                  <circle cx="9.7581" cy="2.76033" r="1.80855" fill="#C0C5CB" />
                  <circle cx="9.7581" cy="10.3774" r="1.80855" fill="#C0C5CB" />
                  <circle cx="2.141" cy="10.3774" r="1.80855" fill="#C0C5CB" />
                  <circle cx="2.141" cy="17.9945" r="1.80855" fill="#C0C5CB" />
                  <circle cx="9.7581" cy="17.9945" r="1.80855" fill="#C0C5CB" />
                </svg>
              </Reorder.Item>
            ))}
          </Reorder.Group>
          {options.length < 4 && (
            <Button
              variant="outlined"
              className="flex justify-center items-center"
              onClick={() => setOptions((prev) => [...prev, { id: prev.length, title: "" }])}
            >
              <PlusIcon color="#000" />
              <Text fontWeight="medium">Add Option</Text>
            </Button>
          )}
          <Box className="flex items-center space-x-3">
            <Avatar src="/jojo.jpg" />
            <Text fontWeight="medium">Mohammad</Text>
          </Box>
          <Button
            variant="text"
            className="flex justify-start items-center space-x-2"
            onClick={() => setTagsModal(true)}
          >
            <PlusIcon color="#000" />
            <Text fontWeight="medium">Add Tags</Text>
          </Button>
        </Box>
        <Button onClick={publishPoll}>Publish</Button>
      </main>

      <Modal isOpen={tagsModal} onClose={() => setTagsModal(false)}>
        <TextField
          placeholder="Search tags ..."
          beforElement={<SearchIcon color="#283138" />}
          onChange={onChangeSearchTag}
        />
        <Box className="max-h-[16rem] py-5 flex flex-wrap gap-3 overflow-auto">
          {getTags.isLoading && (
            <>
              <Skeleton w="6rem" h="2rem" className="rounded-full" />
              <Skeleton w="8rem" h="2rem" className="rounded-full" />
              <Skeleton w="10rem" h="2rem" className="rounded-full" />
            </>
          )}
          {getTags.isSuccess && getTags.data?.data?.map((tag) => <Chips>{tag.title}</Chips>)}
        </Box>
      </Modal>
    </Layout>
  );
};

export default NewPoll;
