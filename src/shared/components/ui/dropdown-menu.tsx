import {
	forwardRef,
	type ElementRef,
	type ComponentPropsWithoutRef,
	type HTMLAttributes,
} from 'react'
import {
	Root as DropdownMenuRoot,
	Trigger as DropdownMenuTriggerPrimitive,
	Group as DropdownMenuGroupPrimitive,
	Portal as DropdownMenuPortalPrimitive,
	Sub as DropdownMenuSubPrimitive,
	RadioGroup as DropdownMenuRadioGroupPrimitive,
	SubTrigger as DropdownMenuSubTriggerPrimitive,
	SubContent as DropdownMenuSubContentPrimitive,
	Content as DropdownMenuContentPrimitive,
	Item as DropdownMenuItemPrimitive,
	CheckboxItem as DropdownMenuCheckboxItemPrimitive,
	RadioItem as DropdownMenuRadioItemPrimitive,
	Label as DropdownMenuLabelPrimitive,
	Separator as DropdownMenuSeparatorPrimitive,
	ItemIndicator as DropdownMenuItemIndicatorPrimitive,
} from '@radix-ui/react-dropdown-menu'
import { Check, ChevronRight, Circle } from 'lucide-react'

import { cn } from '@/shared/lib/utils'

const DropdownMenu = DropdownMenuRoot

const DropdownMenuTrigger = DropdownMenuTriggerPrimitive

const DropdownMenuGroup = DropdownMenuGroupPrimitive

const DropdownMenuPortal = DropdownMenuPortalPrimitive

const DropdownMenuSub = DropdownMenuSubPrimitive

const DropdownMenuRadioGroup = DropdownMenuRadioGroupPrimitive

const DropdownMenuSubTrigger = forwardRef<
	ElementRef<typeof DropdownMenuSubTriggerPrimitive>,
	ComponentPropsWithoutRef<typeof DropdownMenuSubTriggerPrimitive> & {
		inset?: boolean
	}
>(({ className, inset, children, ...props }, ref) => (
	<DropdownMenuSubTriggerPrimitive
		ref={ref}
		className={cn(
			'focus:bg-accent data-[state=open]:bg-accent flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
			inset && 'pl-8',
			className
		)}
		{...props}
	>
		{children}
		<ChevronRight className="ml-auto" />
	</DropdownMenuSubTriggerPrimitive>
))
DropdownMenuSubTrigger.displayName = DropdownMenuSubTriggerPrimitive.displayName

const DropdownMenuSubContent = forwardRef<
	ElementRef<typeof DropdownMenuSubContentPrimitive>,
	ComponentPropsWithoutRef<typeof DropdownMenuSubContentPrimitive>
>(({ className, ...props }, ref) => (
	<DropdownMenuSubContentPrimitive
		ref={ref}
		className={cn(
			'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-[--radix-dropdown-menu-content-transform-origin] overflow-hidden rounded-md border p-1 shadow-lg',
			className
		)}
		{...props}
	/>
))
DropdownMenuSubContent.displayName = DropdownMenuSubContentPrimitive.displayName

const DropdownMenuContent = forwardRef<
	ElementRef<typeof DropdownMenuContentPrimitive>,
	ComponentPropsWithoutRef<typeof DropdownMenuContentPrimitive>
>(({ className, sideOffset = 4, ...props }, ref) => (
	<DropdownMenuPortalPrimitive>
		<DropdownMenuContentPrimitive
			ref={ref}
			sideOffset={sideOffset}
			className={cn(
				'bg-popover text-popover-foreground z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
				'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]',
				className
			)}
			{...props}
		/>
	</DropdownMenuPortalPrimitive>
))
DropdownMenuContent.displayName = DropdownMenuContentPrimitive.displayName

const DropdownMenuItem = forwardRef<
	ElementRef<typeof DropdownMenuItemPrimitive>,
	ComponentPropsWithoutRef<typeof DropdownMenuItemPrimitive> & {
		inset?: boolean
	}
>(({ className, inset, ...props }, ref) => (
	<DropdownMenuItemPrimitive
		ref={ref}
		className={cn(
			'focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
			inset && 'pl-8',
			className
		)}
		{...props}
	/>
))
DropdownMenuItem.displayName = DropdownMenuItemPrimitive.displayName

const DropdownMenuCheckboxItem = forwardRef<
	ElementRef<typeof DropdownMenuCheckboxItemPrimitive>,
	ComponentPropsWithoutRef<typeof DropdownMenuCheckboxItemPrimitive>
>(({ className, children, checked, ...props }, ref) => (
	<DropdownMenuCheckboxItemPrimitive
		ref={ref}
		className={cn(
			'focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
			className
		)}
		checked={checked}
		{...props}
	>
		<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
			<DropdownMenuItemIndicatorPrimitive>
				<Check className="h-4 w-4" />
			</DropdownMenuItemIndicatorPrimitive>
		</span>
		{children}
	</DropdownMenuCheckboxItemPrimitive>
))
DropdownMenuCheckboxItem.displayName =
	DropdownMenuCheckboxItemPrimitive.displayName

const DropdownMenuRadioItem = forwardRef<
	ElementRef<typeof DropdownMenuRadioItemPrimitive>,
	ComponentPropsWithoutRef<typeof DropdownMenuRadioItemPrimitive>
>(({ className, children, ...props }, ref) => (
	<DropdownMenuRadioItemPrimitive
		ref={ref}
		className={cn(
			'focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
			className
		)}
		{...props}
	>
		<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
			<DropdownMenuItemIndicatorPrimitive>
				<Circle className="h-2 w-2 fill-current" />
			</DropdownMenuItemIndicatorPrimitive>
		</span>
		{children}
	</DropdownMenuRadioItemPrimitive>
))
DropdownMenuRadioItem.displayName = DropdownMenuRadioItemPrimitive.displayName

const DropdownMenuLabel = forwardRef<
	ElementRef<typeof DropdownMenuLabelPrimitive>,
	ComponentPropsWithoutRef<typeof DropdownMenuLabelPrimitive> & {
		inset?: boolean
	}
>(({ className, inset, ...props }, ref) => (
	<DropdownMenuLabelPrimitive
		ref={ref}
		className={cn(
			'px-2 py-1.5 text-sm font-semibold',
			inset && 'pl-8',
			className
		)}
		{...props}
	/>
))
DropdownMenuLabel.displayName = DropdownMenuLabelPrimitive.displayName

const DropdownMenuSeparator = forwardRef<
	ElementRef<typeof DropdownMenuSeparatorPrimitive>,
	ComponentPropsWithoutRef<typeof DropdownMenuSeparatorPrimitive>
>(({ className, ...props }, ref) => (
	<DropdownMenuSeparatorPrimitive
		ref={ref}
		className={cn('bg-muted -mx-1 my-1 h-px', className)}
		{...props}
	/>
))
DropdownMenuSeparator.displayName = DropdownMenuSeparatorPrimitive.displayName

const DropdownMenuShortcut = ({
	className,
	...props
}: HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span
			className={cn(
				'ml-auto text-xs tracking-widest opacity-60',
				className
			)}
			{...props}
		/>
	)
}
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'

export {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuCheckboxItem,
	DropdownMenuRadioItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuGroup,
	DropdownMenuPortal,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuRadioGroup,
}
