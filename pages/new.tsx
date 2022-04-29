/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { useState, useEffect, useCallback, ImgHTMLAttributes } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Reorder } from 'framer-motion';
import toast from 'react-hot-toast';
import isEmpty from 'lodash/isEmpty';
import debounce from 'lodash/debounce';
import seedColor from 'seed-color';
import capitalize from 'lodash/capitalize';
import { useUser } from '../contexts/user';

import Avatar from '@/components/atom/Avatar';
import Box from '@/components/atom/Box';
import Button from '@/components/atom/Button';
import Chips from '@/components/atom/Chips';
import Modal from '@/components/atom/Modal';
import Text from '@/components/atom/Text';
import TextField from '@/components/atom/TextField';
import { AddImageIcon, CheckIcon, CloseIcon, PlusIcon, SearchIcon } from '@/components/icons';
import Layout from '@/components/Layout';
import { Skeleton } from '@/components/atom/Skeleton';
import CropImage from '@/components/organisms/CropImage';
import { useGetTags } from '@/apis/tags/getAll';
import { useCreatePoll } from '@/apis/votes/create';
import { useCreateTag } from '@/apis/tags/create';
import AvatarForUser from '@/components/molecules/AvatarForUser';

const NewPoll: NextPage = () => {
  const router = useRouter();
  const [user] = useUser();
  const [tagsModal, setTagsModal] = useState(false);
  const [newTagModal, setNewTagModal] = useState(false);
  const [cropModal, setCropModal] = useState(false);
  const [searchTagValue, setSearchTagValue] = useState('');
  const getTags = useGetTags({ page: 1, search: searchTagValue });
  const [tags, setTags] = useState<Tag[]>([]);
  const [title, setTitle] = useState('');
  const [options, setOptions] = useState([
    { id: 1, title: '' },
    { id: 2, title: '' }
  ]);
  const createPoll = useCreatePoll();
  const createTag = useCreateTag();
  const allowedFileTypes = `image/gif image/png, image/jpeg, image/x-png`;
  const [selectImage, setSelectImage] =
    useState<ImgHTMLAttributes<HTMLImageElement>['src']>(undefined);
  const [coverImage, setCoverImage] = useState<File | undefined>(undefined);
  const [tagName, setTagName] = useState('');

  useEffect(() => {
    tagsModal && getTags.refetch();
  }, [tagsModal]);

  const onChangeSearchTag = debounce(e => {
    setSearchTagValue(e.target.value);
    setTimeout(() => getTags.refetch(), 0);
  }, 1000);

  const publishPoll = async () => {
    try {
      const {
        data: { id }
      } = await createPoll.mutateAsync({
        title,
        options: options.map(({ title }) => ({
          title
        })),
        cover: coverImage,
        tag_ids: tags.map(({ id }): number => id)
      });
      router.push(`/p/${id}`);
    } catch (error: any) {}
  };

  const createTagAction = () => {
    createTag.mutate(
      {
        title: tagName
      },
      {
        onSuccess: () => {
          toast('Tag created successfully');
          setNewTagModal(false);
          setTagName('');
          getTags.refetch();
        }
      }
    );
  };

  const removeOption = useCallback(
    (index: number) => setOptions(options.filter((_, i) => i !== index)),
    [options]
  );

  const addOption = useCallback(() => {
    setOptions([...options, { id: Math.random(), title: '' }]);
  }, [options]);

  if (!user) return null;
  return (
    <Layout shouldNotShowNavigationBar={true}>
      <Head>
        <title>New Poll</title>
      </Head>

      <main className="flex flex-col h-full justify-between">
        <Box className="space-y-5 overflow-auto pb-20 scrollbar-hide">
          <label
            htmlFor="upload-image"
            className="w-full h-[150px] flex justify-center items-center cursor-pointer border border-dashed border-[#D5D7DA] rounded-md overflow-hidden"
          >
            <input
              className="hidden absolute"
              id="upload-image"
              name="upload photo"
              type="file"
              multiple={false}
              onChange={e => {
                // @ts-ignore
                setSelectImage(URL.createObjectURL(e.target.files[0]));
                setCropModal(true);
              }}
              accept={allowedFileTypes}
            />
            {!coverImage && (
              <Box className="flex flex-col space-y-2 justify-center items-center">
                <AddImageIcon color="#000" />
                <Text fontSize="sm" fontWeight="medium">
                  Add Cover
                </Text>
              </Box>
            )}
            {coverImage && (
              <img className="w-full h-full" src={URL.createObjectURL(coverImage)} alt="" />
            )}
          </label>

          <TextField
            onChange={e => setTitle(e.target.value)}
            value={title}
            placeholder="Write a question ..."
            dir="auto"
          />
          <Reorder.Group
            axis="y"
            values={options}
            onReorder={setOptions}
            className="w-full flex flex-col space-y-2"
          >
            {options.map((option, index) => (
              <Reorder.Item key={option.id} value={option} className="flex items-center">
                {options.length > 2 && (
                  <CloseIcon
                    className="mr-2 cursor-pointer"
                    color="#ccc"
                    onClick={() => removeOption(index)}
                  />
                )}
                <TextField
                  placeholder={`Option ${index + 1}`}
                  onChange={e => {
                    options[index].title = e.target.value;
                    setOptions(options);
                  }}
                  dir="auto"
                />
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-3 cursor-pointer"
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
              onClick={addOption}
            >
              <PlusIcon color="#000" />
              <Text fontWeight="medium">Add Option</Text>
            </Button>
          )}
          <Box className="flex items-center space-x-2">
            <AvatarForUser username={user.username!} />
            <Text fontWeight="medium">{user.username}</Text>
          </Box>
          {!isEmpty(tags) && (
            <Box className="flex max-h-[7rem] flex-wrap gap-2 overflow-auto">
              {tags.map(tag => (
                <Chips
                  key={tag.id}
                  style={{
                    color: seedColor(tag.title).toHex(),
                    borderColor: seedColor(tag.title).toHex()
                  }}
                  onClick={() => setTags(prev => prev.filter(({ id }) => id !== tag.id))}
                >
                  {tag.title}
                </Chips>
              ))}
            </Box>
          )}
          <Button
            variant="text"
            className="flex !justify-start items-center space-x-2"
            onClick={() => setTagsModal(true)}
          >
            <PlusIcon color="#000" />
            <Text fontWeight="medium">Add Tags</Text>
          </Button>
        </Box>
        <Button onClick={publishPoll} isLoading={createPoll.isLoading}>
          Publish
        </Button>
      </main>

      <Modal isOpen={tagsModal} onClose={() => setTagsModal(false)}>
        <TextField
          placeholder="Search tags ..."
          beforElement={<SearchIcon color="#283138" />}
          onChange={onChangeSearchTag}
        />
        <Box className="max-h-[16rem] py-5 flex flex-wrap gap-3 overflow-auto">
          <Chips className="!pl-[0.7rem]" onClick={() => setNewTagModal(true)}>
            <PlusIcon color="#000" className="w-6 h-6" />
            <span>New Tag</span>
          </Chips>
          {getTags.isLoading && (
            <>
              <Skeleton w="6rem" h="2rem" className="rounded-full" />
              <Skeleton w="8rem" h="2rem" className="rounded-full" />
              <Skeleton w="10rem" h="2rem" className="rounded-full" />
            </>
          )}
          {getTags.isSuccess &&
            getTags.data &&
            getTags.data.map((tag: Tag) => (
              <Chips
                key={tag.id}
                style={{
                  color: seedColor(tag.title).toHex(),
                  borderColor: seedColor(tag.title).toHex()
                }}
                onClick={() =>
                  tags.some(({ id }) => id === tag.id)
                    ? setTags(prev => prev.filter(({ id }) => id !== tag.id))
                    : setTags((prev: Tag[]) => [...prev, tag])
                }
              >
                {tags.some(({ id }) => id === tag.id) && (
                  <CheckIcon color={seedColor(tag.title).toHex()} className="mr-1" />
                )}
                <span>{tag.title}</span>
              </Chips>
            ))}
        </Box>
      </Modal>
      <Modal isOpen={newTagModal} onClose={() => setNewTagModal(false)}>
        <Box className="flex flex-col space-y-3">
          <Box className="flex justify-between items-center">
            <Text fontSize="sm" fontWeight="medium">
              Name Tag
            </Text>
            {tagName && (
              <Box
                className="w-5 h-5 rounded-full"
                style={{
                  backgroundColor: seedColor(capitalize(tagName)).toHex()
                }}
              />
            )}
          </Box>
          <TextField placeholder="Programming" onChange={e => setTagName(e.currentTarget.value)} />
          <Button onClick={createTagAction} isLoading={createTag.isLoading}>
            Add
          </Button>
        </Box>
      </Modal>
      <Modal isOpen={cropModal} onClose={() => setCropModal(false)}>
        <CropImage
          src={selectImage}
          output={src => {
            setCropModal(false);
            setCoverImage(src);
          }}
        />
      </Modal>
    </Layout>
  );
};

export default NewPoll;
