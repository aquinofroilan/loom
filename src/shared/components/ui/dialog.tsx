import {
	forwardRef,
	type ElementRef,
	type ComponentPropsWithoutRef,
	type HTMLAttributes,
} from 'react'
import {
	Root as DialogRoot,
	Trigger as DialogTriggerPrimitive,
	Portal as DialogPortalPrimitive,
	Close as DialogClosePrimitive,
	Overlay as DialogOverlayPrimitive,
	Content as DialogContentPrimitive,
	Title as DialogTitlePrimitive,
	Description as DialogDescriptionPrimitive,
} from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { cn } from '@/shared/lib/utils'

const Dialog = DialogRoot

const DialogTrigger = DialogTriggerPrimitive

const DialogPortal = DialogPortalPrimitive

const DialogClose = DialogClosePrimitive

const DialogOverlay = forwardRef<
	ElementRef<typeof DialogOverlayPrimitive>,
	ComponentPropsWithoutRef<typeof DialogOverlayPrimitive>
>(({ className, ...props }, ref) => (
	<DialogOverlayPrimitive
		ref={ref}
		className={cn(
			'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80',
			className
		)}
		{...props}
	/>
))
DialogOverlay.displayName = DialogOverlayPrimitive.displayName

const DialogContent = forwardRef<
	ElementRef<typeof DialogContentPrimitive>,
	ComponentPropsWithoutRef<typeof DialogContentPrimitive>
>(({ className, children, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay />
		<DialogContentPrimitive
			ref={ref}
			className={cn(
				'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg',
				className
			)}
			{...props}
		>
			{children}
			<DialogClosePrimitive className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none">
				<X className="h-4 w-4" />
				<span className="sr-only">Close</span>
			</DialogClosePrimitive>
		</DialogContentPrimitive>
	</DialogPortal>
))
DialogContent.displayName = DialogContentPrimitive.displayName

const DialogHeader = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			'flex flex-col space-y-1.5 text-center sm:text-left',
			className
		)}
		{...props}
	/>
)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
			className
		)}
		{...props}
	/>
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = forwardRef<
	ElementRef<typeof DialogTitlePrimitive>,
	ComponentPropsWithoutRef<typeof DialogTitlePrimitive>
>(({ className, ...props }, ref) => (
	<DialogTitlePrimitive
		ref={ref}
		className={cn(
			'text-lg leading-none font-semibold tracking-tight',
			className
		)}
		{...props}
	/>
))
DialogTitle.displayName = DialogTitlePrimitive.displayName

const DialogDescription = forwardRef<
	ElementRef<typeof DialogDescriptionPrimitive>,
	ComponentPropsWithoutRef<typeof DialogDescriptionPrimitive>
>(({ className, ...props }, ref) => (
	<DialogDescriptionPrimitive
		ref={ref}
		className={cn('text-muted-foreground text-sm', className)}
		{...props}
	/>
))
DialogDescription.displayName = DialogDescriptionPrimitive.displayName

export {
	Dialog,
	DialogPortal,
	DialogOverlay,
	DialogTrigger,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription,
}
