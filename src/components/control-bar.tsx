import { FC, useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { Plus } from "lucide-react";

import {
  addPhraseAtom,
  filteredByPhraseAtom,
  searchAtom,
} from "@/store/phrases";
import { useDebounce } from "@/hooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ControlBar: FC = () => {
  const addInputRef = useRef<HTMLInputElement>(null);

  const [, addPhrase] = useAtom(addPhraseAtom);
  const [search, setSearch] = useAtom(searchAtom);
  const [, filteredByPhrase] = useAtom(filteredByPhraseAtom);

  const debouncedSearch = useDebounce(search, 500);

  // ADD
  const handleAddPhrase = () => {
    if (!addInputRef.current?.value) return;

    addPhrase(addInputRef.current.value);
    addInputRef.current.value = "";
  };

  const handlePressEnter =
    (callback: () => void) =>
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        callback();
      }
    };

  // FILTER
  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    filteredByPhrase(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row">
      {/* Add */}
      <div className="flex flex-1 px-5 md:px-0">
        <Input
          type="text"
          placeholder="Add new phrase"
          className="rounded-r-none"
          ref={addInputRef}
          onKeyDown={handlePressEnter(handleAddPhrase)}
        />
        <Button
          className="flex items-center gap-2 rounded-l-none border-l-0"
          variant="outline"
          loading={false}
          icon={<Plus className="h-4 w-4" />}
          onClick={handleAddPhrase}
        >
          Add
        </Button>
      </div>
      {/* Filter */}
      <div className="flex items-center gap-2 border-l border-slate-700 pl-5">
        <Label size="sm">Filter:</Label>
        <Input
          type="text"
          placeholder="Phrase"
          onChange={handleFilter}
          value={search}
        />
      </div>
    </div>
  );
};

export { ControlBar };
