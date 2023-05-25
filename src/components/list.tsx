import { FC } from "react";
import { useAtom } from "jotai";
import { X } from "lucide-react";

import { type Phrase } from "@/types";
import { removePhraseAtom } from "@/store/phrases";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardActions,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

interface ListProps {
  data?: Phrase[];
}

const List: FC<ListProps> = ({ data }) => {
  const [, removePhrase] = useAtom(removePhraseAtom);
  const hasData = data && Boolean(data.length);

  const handleRemove = (id: string) => () => {
    removePhrase(id);
  };

  return (
    <div className="flex flex-wrap gap-4 rounded-md border border-slate-700 px-5 py-10">
      {/* card */}
      {hasData &&
        data.map(({ phrase, id }) => (
          <Card key={id}>
            <CardTitle>{phrase}</CardTitle>
            <CardContent>
              Content about <b className="text-base">{phrase}</b>
            </CardContent>
            <CardActions className="flex justify-end">
              <Button
                size="sm"
                variant="outline"
                icon={<X className="h-4 w-4" />}
                onClick={handleRemove(id)}
                className="gap-2"
              >
                Remove
              </Button>
            </CardActions>
          </Card>
        ))}
      {/* no data */}
      {!hasData && (
        <div className="flex items-center justify-center">
          <h3 className="text-center text-xl font-bold tracking-wide text-slate-50">
            No data
          </h3>
        </div>
      )}
    </div>
  );
};

export { List };
