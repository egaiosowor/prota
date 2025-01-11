"use client";

import InputWithLabel from "../ui/inputWithLabel";
import SelectWithLabel from "../ui/selectWithLabel";
import DisplayField from "@/components/ui/displayField";
import EditButton from "@/components/ui/editButton";
import { ProfileFormSkeleton } from "@/components/ui/skeletons";

import { Title, Gender } from "@/lib/definitions";
import type { User } from "@/lib/definitions";
import { toStartCase } from "@/lib/utils";
import { updateProfile } from "@/actions/actions";

import { useActionState } from "react";
import useDisclosure from "@/hooks/useDisclosure";
import { Button, buttonVariants } from "../ui/button";
import Loader from "../ui/loader";

export default function ProfileForm({ user }: { user: User | null }) {
  const [state, formAction, isPending] = useActionState(
    updateProfile,
    undefined
  );

  const { isOpen, onToggle } = useDisclosure();

  if (!user) {
    return <ProfileFormSkeleton />;
  }

  return (
    <form action={formAction} className="bg-white rounded-xl p-6 space-y-3">
      <div className="flex justify-between items-start">
        <h4 className="text-base text-blue-950 font-semibold">
          Personal Information
        </h4>
        {!isOpen ? (
          <EditButton onToggle={onToggle} />
        ) : (
          <Button
            type="submit"
            disabled={isPending}
            className={buttonVariants({ variant: "outline" })}
          >
            {isPending && <Loader fill={"fill-black"} />}
            {isPending ? "Submitting" : "Save"}
          </Button>
        )}
      </div>
      {!isOpen && (
        <div className="w-[450px] grid grid-cols-2 gap-4">
          <DisplayField label={"First Name"} value={user.first_name} />
          <DisplayField label={"Last Name"} value={user.last_name} />
          <DisplayField label={"Phone"} value={user.phone} />
          <DisplayField label={"Gender"} value={toStartCase(user.gender)} />
          <DisplayField label={"Title"} value={toStartCase(user.title)} />
        </div>
      )}

      {isOpen && (
        <div className="w-[450px] grid grid-cols-2 gap-4">
          <input type="hidden" name="id" value={user.id} />
          <InputWithLabel
            type={"text"}
            label={"First Name"}
            defaultValue={user.first_name || ""}
            name={"first_name"}
          />
          <InputWithLabel
            type={"text"}
            label={"Last Name"}
            defaultValue={user.last_name || ""}
            name={"last_name"}
          />
          <InputWithLabel
            type={"tel"}
            label={"Phone"}
            defaultValue={user.phone || ""}
            name={"phone"}
          />
          <SelectWithLabel
            label={"Gender"}
            placeholder={"Select"}
            name={"gender"}
            options={Gender}
            defaultValue={user.gender || ""}
          />
          <SelectWithLabel
            label={"Title"}
            placeholder={"Select"}
            name={"title"}
            options={Title}
            defaultValue={user.title || ""}
          />
        </div>
      )}
    </form>
  );
}
